import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	containerClassName?: string;
	label?: string;
}

const ImageField = ( { containerClassName, label, ...props }: IProps ) => {
	return (
			<div className={ containerClassName }>
				<div className='boldTextEdit mb-10'>
					{ label }
					{ props.content && <span className='red-star'>*</span> }
				</div>
				<div>
					<img src={ props.src } className='imgEditFile' { ...props }/>
				</div>
			</div>
	);
};

export default ImageField;