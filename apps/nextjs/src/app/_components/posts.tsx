import type { RouterOutputs } from "@acme/api"

import { createPost, deletePost, getPosts } from "../actions/post"

export async function PostList() {
  const posts = await getPosts()

  if (posts?.length === 0) {
    return (
      <div className='relative flex w-full flex-col gap-4'>
        <PostCardSkeleton pulse={false} />
        <PostCardSkeleton pulse={false} />
        <PostCardSkeleton pulse={false} />

        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/10'>
          <p className='text-2xl font-bold text-white'>No posts yet</p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex w-full flex-col gap-4'>
      {posts.map((p) => {
        return <PostCard key={p.id} post={p} />
      })}
    </div>
  )
}

export function PostCard(props: { post: RouterOutputs["post"]["all"][number] }) {
  return (
    <div className='flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:bg-white/5'>
      <div className='flex-grow'>
        <h2 className='text-2xl font-bold text-pink-400'>{props.post.title}</h2>
        <p className='mt-2 text-sm'>{props.post.content}</p>
      </div>
      <div>
        <form
          action={async () => {
            "use server"
            await deletePost(props.post.id)
          }}
          className='flex flex-col items-center'
        >
          <button type='submit' className='cursor-pointer text-sm font-bold uppercase text-pink-400'>
            Delete
          </button>
        </form>
      </div>
    </div>
  )
}

export function PostCardSkeleton(props: { pulse?: boolean }) {
  const { pulse = true } = props
  return (
    <div className='flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]'>
      <div className='flex-grow'>
        <h2 className={`w-1/4 rounded bg-pink-400 text-2xl font-bold ${pulse && "animate-pulse"}`}>&nbsp;</h2>
        <p className={`mt-2 w-1/3 rounded bg-current text-sm ${pulse && "animate-pulse"}`}>&nbsp;</p>
      </div>
    </div>
  )
}

export function CreatePostForm() {
  return (
    <form
      className='flex w-full max-w-2xl flex-col'
      action={async (data) => {
        "use server"
        const title = data.get("title")
        const content = data.get("content")
        await createPost({ title, content })
      }}
    >
      <input name='title' className='mb-2 rounded bg-white/10 p-2 text-white' placeholder='Title' />
      <input name='content' className='mb-2 rounded bg-white/10 p-2 text-white' placeholder='Content' />
      <button type='submit' className='rounded bg-pink-400 p-2 font-bold'>
        Create
      </button>
    </form>
  )
}
