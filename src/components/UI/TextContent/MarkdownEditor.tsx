import React, { ChangeEventHandler } from 'react';
import './MarkdownEditor.scss';

const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
  const { onChange, className } = props;

  return (
    <div className='main__editor'>
      <textarea
        cols={30}
        rows={10}
        onChange={onChange}
        className={`main__editor-textarea ${className}`}
      ></textarea>
    </div>
  );
};

interface MarkdownEditorProps {
  onChange: ChangeEventHandler;
  className: string;
}
export default MarkdownEditor;
