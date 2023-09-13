const plugins = [
  'a11ychecker',
  'advcode',
  'advlist',
  'anchor',
  'autolink',
  'codesample',
  'fullscreen',
  'help',
  'tinydrive',
  'lists',
  'link',
  'powerpaste',
  'searchreplace',
  'table',
  'template',
  'tinymcespellchecker',
  'visualblocks',
];

const toolbar =
  'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | ' +
  'template codesample | alignleft aligncenter alignright alignjustify ' +
  '| bullist numlist | link image';

export const init = {
  height: 250,
  menubar: false,
  plugins,
  toolbar,
  content_style: 'body { font-family:Inter,sans-serif; font-size:14px }',
};
