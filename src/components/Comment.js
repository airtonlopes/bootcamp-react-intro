import React from 'react';

function Comment({comments}) {
	if( comments ) {
		return (
			<div className="comments">{comments.map((cmt, index)=><Item key={index} comment={cmt} />)}</div>
		);
	}
	return '';
}

function Item({comment}) {
	return (
		<article className="post-comment">
			<div className="comment-gravatar">
				<img src={comment.gravatar} />
			</div>
			<div className="comment-content">
				<p>
					<strong>{comment.author}</strong>
					{comment.text}
				</p>
			</div>
		</article>
	);
}

export default Comment;