export interface MediaItem {
  type: 'image' | 'video'
  src: string
  poster?: string
}

const EXT = /\.(jpe?g|png|mp4|mov)$/i

/** 640px gallery thumbnail of an image */
export const thumbSrc = (src: string) => src.replace(EXT, '.thumb.jpg')

/** 1920px lightbox version of an image */
export const largeSrc = (src: string) => src.replace(EXT, '.large.jpg')

/** ≤540p muted gallery preview of a video */
export const previewSrc = (src: string) => src.replace(EXT, '.preview.mp4')

/** first-frame poster of a video */
export const posterSrc = (src: string) => src.replace(EXT, '.poster.jpg')
