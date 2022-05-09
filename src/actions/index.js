export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export function start(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit,
  }
}

export function clear(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit,
  }
}


