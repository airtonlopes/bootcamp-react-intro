import React from 'react';
import Comment from './Comment';

function Post({post}) {
	return (
		<section className="post">
			<article className="post-text">
				<header>
					<div className="post-gravatar">
						<img src={post.gravatar} />
					</div>
					<div className="post-info">
						<h3>{post.author}</h3>
						<i>{post.date}</i>
					</div>
				</header>
				<p>
					{post.text}
				</p>
			</article>
			<Comment key="comments" comments={post.comments || null}/>
		</section>
	);
}

export default Post;