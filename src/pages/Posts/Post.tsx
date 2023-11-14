import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../common/API/services/post';

import Comment from '../../components/Comment';
import AddElementWithTextarea from '../../components/AddElementWithTextarea';
import { useTypedSelector } from '../../common/store';
import { selectCurrentUser } from '../../common/store/authSlice';
import { useGetCommentsForPostQuery } from '../../common/API/services/comment';

type PostRouteParams = {
  id: string;
};

const Post: React.FC = () => {
  const navigate = useNavigate();
  const user = useTypedSelector(selectCurrentUser);
  const { id } = useParams<PostRouteParams>();
  const { data: post, isLoading: isPostLoading } = useGetPostQuery(Number(id));
  const { data: comments, isLoading: isCommentsLoading } = useGetCommentsForPostQuery(Number(id));

  if (isPostLoading && isCommentsLoading) return 'Loading...';
  if (!post) return 'Post not found';

  return (
    <section className="w-screen flex justify-center">
      <div className="flex flex-col justify-center w-2/5 border-x border-gray-800 px-24 relative z-10">
        <div
          className="text-white hover:text-sky-600 w-11 h-11 absolute top-40 left-6 flex items-center justify-center rounded-full cursor-pointer "
          onClick={() => navigate('/posts')}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
            ``
          </svg>
        </div>
        <div className="mt-40 flex mx-4 md:mx-auto max-w-md md:max-w-2xl border rounded-lg shadow bg-gray-800 border-gray-700">
          <div className="flex items-start px-4 pt-6 pb-4">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="w-full">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold text-white">Brad Adams </h2>
                  <small className="text-sm text-gray-400">22h ago</small>
                </div>
                <p className="text-gray-400">Lorem ipsum, dolor sit amet conse. </p>
                <p className="mt-3 text-gray-100 text-sm">{post.body}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex mr-4 text-gray-400 text-sm cursor-pointer">
                  {Math.random() >= 0.5 ? (
                    <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ) : (
                    <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-red-500" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                  <span>12</span>
                </div>
                <div className="flex mr-4 text-gray-400 text-sm cursor-pointer">
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-10 antialiased">
          <div className="max-w-2xl mx-auto px-4">
            <AddElementWithTextarea name="comment" isAuth={!!user} onAdd={() => {}} />

            {comments?.map((comment, index) => <Comment commentId={index} comment={comment} />)}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Post;
