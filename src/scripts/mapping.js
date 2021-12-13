const {getIn,setIn}= require('immutable');


const mapResult = (mapping, record) => {
  if (mapping.source) {
    const source = mapping.source;
    return getValue(record,source)
  }
  if (mapping.mappingFunction && mapping.sources) {
    const sources = mapping.sources;
    const mappingFun = mapping.mappingFunction;
    return mappingFun(sources, record);
  }
  return record;
};
const mapFunction = (mappings, record) => {
  let result = {};
  const targetKeys = Object.keys(mappings);
  targetKeys.forEach((key) => {
    result=setValue(result, key, mapResult(mappings[key], record));
  });
  return result;
};
const record = {
  first_name: 'John',
  last_name: 'Doe',
  salary: 10000,
  bonus: 200,
  address: {
    city: 'San Jose',
    state: 'CA',
    street: '398 Boynton Ave',
    zip: '95117',
  },
  prevAddresses:[{
    city: 'San Jose',
    state: 'CA',
    street: '398 Boynton Ave',
    zip: '95117',
  },
  ]
};
const getValue = (r, path) => {
  const paths = path.split('.');
  return getIn(r, paths);
};
const setValue = (r, path, value) => {
  const paths = path.split('.');
  r=setIn(r, paths, value);
  return r;
};
const mappings = {
  full_name: {
    sources: ['first_name', 'last_name'],
    target: 'full_name',
    mappingFunction(sources, r) {
      return `${r[sources[0]]} ${r[sources[1]]}`;
    },
  },
  salary: {
    source: 'salary',
    target: 'salary',
  },
  totalCompensation: {
    sources: ['salary', 'bonus'],
    target: 'totalCompensation',
    mappingFunction(sources, r) {
      return r[sources[0]] + r[sources[1]];
    },
  },
  addressStr: {
    sources: ['address.street', 'address.city', 'address.state', 'address.zip'],
    target: 'addressStr',
    mappingFunction(sources, r) {
      const ad = [];
      for (let i = 0; i < sources.length; i++) {
        ad.push(getValue(r, sources[i]));
      }
      return ad.join(', ');
    },
  },
  'address.street': {
    source: 'address.street',
    target: 'address.street',
  },
  'address.city': {
    source: 'address.city',
    target: 'address.city',
  },
  'address.state': {
    source: 'address.state',
    target: 'address.state',
  },
  'address.zip': {
    source: 'address.zip',
    target: 'address.zip',
  },
  prevZip:{
    source:'prevAddresses',
    target:'prevZip',
    mappingFunction:(source,r)=>{
      return getValue(r,source)[0]['zip'];
    }
  }
};
const res = mapFunction(mappings, record);
console.log(res);
