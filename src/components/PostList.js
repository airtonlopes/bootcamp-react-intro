import React, { Component } from "react";
import he from "../assets/he.png";
import she from "../assets/she.png";
import Post from './Post';

class PostList extends Component {
	state = {
		posts: [
			{
				author: 'Airton Lopes',
				text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur porro nobis, accusantium aliquam deleniti odit nostrum, sed quod voluptatibus vitae aperiam inventore ullam laudantium facilis possimus consequuntur numquam unde?',
				date: '04 Jun 2019',
				gravatar: he,
				comments: [
					{
						author: 'Clara Lisboa',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
						gravatar: she
					},
					{
						author: 'Pedro Cardoso',
						text: ' Velit consequatur porro nobis, accusantium aliquam deleniti odit nostrum, sed quod voluptatibus vitae aperiam inventore ullam laudantium facilis possimus consequuntur numquam unde',
						gravatar: he
					}
				]
			},
			{
				author: 'Clara Lisboa',
				text: 'Accusantium aliquam deleniti odit nostrum, sed quod voluptatibus vitae aperiam inventore ullam laudantium facilis possimus consequuntur numquam unde?',
				date: '04 Jun 2019',
				gravatar: she
			},
			{
				author: 'Rodrigo Poli',
				text: 'Accusantium aliquam deleniti odit nostrum, sed quod voluptatibus vitae aperiam inventore ullam laudantium facilis possimus consequuntur numquam unde?',
				date: '04 Jun 2019',
				gravatar: he,
				comments: [
					{
						author: 'Aitron Lopes',
						text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur porro nobis,',
						gravatar: he
					},
					{
						author: 'Clara Lisboa',
						text: ' Velit consequatur porro nobis, accusantium aliquam deleniti odit nostrum, sed quod voluptatibus vitae aperiam inventore ullam laudantium facilis possimus consequuntur numquam unde',
						gravatar: she
					}
				]
			}
		]
	};

	render() {
		return (
			<main id="PostList">
				{
					this.state.posts.map((post, index)=>{
						return <Post key={index} post={post}  />
					})
				}
			</main>
		);
	}
}

export default PostList;
