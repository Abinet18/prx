import {
  ProfileType,
  ProfileFormData,
  QuestionType,
  QuestionFormData,
  PostFormData,
  PostType,
} from '../types/types';

export const profileForm: ProfileFormData = {
  title: 'User Profile Form',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'Text',
      placeholder: 'Name',
      default: '',
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'Radio',
      default: '',
      options: ['Male', 'Female'],
    },
    { name: 'bdate', label: 'Birth Date', type: 'Date', default: '' },
    { name: 'picture', label: 'Profile Picture', type: 'Image', default: '' },
    {
      name: 'jtitle',
      label: 'Job title',
      type: 'Select',
      placeholder: 'Job title',
      default: '',
      options: [
        { value: 'Software Engineer', label: 'Software Engineer' },
        { value: 'Product Manager', label: 'Product Manager' },
        {
          value: 'Chief Technology Officer',
          label: 'Chief Technology Officer',
        },
        { value: 'Director', label: 'Director' },
        {
          value: 'Chief Executive Officer',
          label: 'Software Chief Executive Officer',
        },
      ],
    },
    {
      name: 'cname',
      label: 'Company Name',
      type: 'Text',
      placeholder: 'Comapny Name',
      default: '',
    },
    {
      name: 'summary',
      label: 'Short personal summary',
      type: 'Text',
      placeholder: 'Summarize your experience',
      default: '',
      rows: 4,
    },
    {
      name: 'mstatus',
      label: 'Marital Status',
      type: 'Radio',
      default: '',
      options: ['Married', 'Single'],
    },
    {
      name: 'interests',
      label: 'Interests',
      type: 'MultiSelect',
      default: '',
      options: [
        { value: 'Soccer', label: 'Soccer' },
        { value: 'Tennis', label: 'Tennis' },
        { value: 'PingPong', label: 'Ping Pong' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Hiking', label: 'Hiking' },
        { value: 'Biking', label: 'Biking' },
      ],
    },
    {
      name: 'skills',
      label: 'Skills',
      type: 'CheckBoxes',
      default: '',
      options: [
        { value: 'Software Development', label: 'Software Development' },
        { value: 'CSS', label: 'CSS' },
        { value: 'React', label: 'React' },
        { value: 'Java', label: 'Java' },
        { value: 'Kafka', label: 'Kafka' },
        { value: 'Docker', label: 'Docker' },
      ],
    },
  ],
};

export const emptyProfile: ProfileType = {
  name: '',
  gender: '',
  bdate: '',
  jtitle: '',
  cname: '',
  summary: '',
  mstatus: '',
  interests: '',
  skills: '',
};

export const questionForm: QuestionFormData = {
  title: 'Question',
  fields: [
    {
      name: 'text',
      label: 'Question',
      type: 'Text',
      placeholder: 'Write the question ...',
      default: '',
      rows: 4,
    },
    {
      name: 'type',
      label: 'Question Type',
      type: 'Radio',
      default: '',
      options: ['Text', 'Select', 'True False', 'MultiSelect', 'Match'],
    },
  ],
};

export const emptyQuestion: QuestionType = {
  text: '',
  type: 'TEXT',
};

export const postForm: PostFormData = {
  title: 'Post',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'Text',
      placeholder: 'Give a title ...',
      default: '',
    },
    {
      name: 'text',
      label: 'Post',
      type: 'Text',
      placeholder: 'What do you want to say ?',
      default: '',
      rows: 8,
    },
    {
      name: 'postedBy',
      label: 'Posted by',
      type: 'Text',
      default: '',
      placeholder: 'Write your name and title',
    },
    {
      name: 'imageAttached',
      label: 'Add Image',
      type: 'Image',
      default: '',
    },
    {
      name: 'color',
      label: 'Back Ground Color',
      type: 'ColorPicker',
      default: '',
    },
  ],
};

export const emptyPost: PostType = {
  title: '',
  text: '',
  postedBy: '',
  postedDate: '',
  imageAttached: '',
  color: '',
};
