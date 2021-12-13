var fs = require('fs');
// const immutable=require('immutable');

function readNLines(fileName,offset) {
    let chunkSize=1024;
    let fp=fs.openSync(fileName, 'r');
    let lines=[];
    var chunkBuffer = new Buffer(chunkSize);
    var bytesRead = fs.readSync(fp, chunkBuffer, 0, chunkSize, offset);
    while(bytesRead) {
    offset += bytesRead;
    var str = chunkBuffer.slice(0, bytesRead).toString();
    var arr = str.split('\n');
    if(bytesRead === chunkSize) {
        // the last item of the arr may be not a full line, leave it to the next chunk
        offset -= arr.pop().length;
        lines=[...lines,...arr];
        return {lines,offset};
    }
    lines=[...lines,...arr];
    bytesRead = fs.readSync(fp, chunkBuffer, 0, chunkSize, offset);
    }
    return {lines,offset};
}

function processFile(fileName) {
    let stats = fs.statSync(fileName);
    let fileSizeInBytes = stats.size;
    let offset=0;
    // let lineCount=2; 
    let linesRead=0;
    while(offset<fileSizeInBytes) {
        
        let res = readNLines(fileName,offset);
        // console.log(`Lines ${linesRead+1} - ${linesRead+res.lines.length}`);
        // console.log(res.lines);
        offset=res.offset;
        // linesRead+=res.lines.length;
    }
}

processFile('./bookParser.js');
