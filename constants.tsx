
import { Category, Tool } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'video',
    title: 'Fun Video Tools',
    description: 'Easily edit, trim, and combine your videos.',
    color: 'bg-blue-500',
    icon: 'video'
  },
  {
    id: 'audio',
    title: 'Easy Audio Tools',
    description: 'Cut songs and record your voice in seconds.',
    color: 'bg-indigo-500',
    icon: 'music'
  },
  {
    id: 'pdf',
    title: 'PDF Helpers',
    description: 'Merge, split, and fix your school documents.',
    color: 'bg-red-500',
    icon: 'file-text'
  },
  {
    id: 'creative',
    title: 'Design & Logos',
    description: 'Make cool logos and edit pictures for projects.',
    color: 'bg-pink-500',
    icon: 'palette'
  },
  {
    id: 'converters',
    title: 'File Converters',
    description: 'Change files to any format you need.',
    color: 'bg-emerald-500',
    icon: 'refresh-cw'
  },
  {
    id: 'utilities',
    title: 'Useful Stuff',
    description: 'Record your screen or open zip files.',
    color: 'bg-amber-500',
    icon: 'tool'
  }
];

export const TOOLS: Tool[] = [
  // --- VIDEO TOOLS ---
  { 
    id: 'v-edit', 
    name: 'Video Maker', 
    description: 'Start a new video project from scratch!', 
    longDescription: 'A super easy video editor that works right in your browser. Perfect for school projects, YouTube, or just having fun!',
    instructions: ['Pick your video clips.', 'Put them in order on the timeline.', 'Add some text or cool effects.', 'Save your masterpiece!'],
    icon: '🎬', category: 'video', href: '#/video/editor', externalLink: 'https://online-video-cutter.com/video-editor', isPopular: true 
  },
  { 
    id: 'v-trim', 
    name: 'Video Cutter', 
    description: 'Make your videos shorter or cut out parts.', 
    longDescription: 'The fastest way to cut your videos. Just pick the start and end, and you are done!',
    instructions: ['Upload your video.', 'Move the sliders to pick the part you want.', 'Watch a quick preview.', 'Download your new clip!'],
    icon: '✂️', category: 'video', href: '#/video/trim', externalLink: 'https://online-video-cutter.com/'
  },
  { 
    id: 'v-merge', 
    name: 'Video Joiner', 
    description: 'Stick multiple videos together into one.', 
    longDescription: 'Got a few short clips? Use this to glue them all together into one long video!',
    instructions: ['Add all your video files.', 'Drag them to put them in the right order.', 'Click Join.', 'Get your finished video!'],
    icon: '🔗', category: 'video', href: '#/video/merge', externalLink: 'https://online-video-cutter.com/merge-video'
  },
  
  // --- CREATIVE TOOLS ---
  { 
    id: 'c-textstudio', 
    name: '3D Text Maker', 
    description: 'Create amazing 3D titles and logos.', 
    longDescription: 'Make your name or project title look professional with 3D effects and cool colors.',
    instructions: ['Type in your words.', 'Choose a style you like.', 'Change the colors and size.', 'Save it as an image!'],
    icon: '💎', category: 'creative', href: '#/creative/textstudio', externalLink: 'https://www.textstudio.com/', isPopular: true 
  },
  { 
    id: 'c-canva-logo', 
    name: 'AI Logo Creator', 
    description: 'Let AI help you design a great logo.', 
    longDescription: 'Not sure where to start? Tell the AI what you like and it will show you some logo ideas!',
    instructions: ['Describe your idea.', 'Pick a style you love.', 'Change the colors if you want.', 'Download your new logo.'],
    icon: '🎨', category: 'creative', href: '#/creative/canva-logo', externalLink: 'https://www.canva.com/ai-logo-generator/'
  },
  { 
    id: 'c-adobe-express', 
    name: 'Adobe Express', 
    description: 'Quickly edit photos and social posts.', 
    longDescription: 'The best way to make flyers, posters, or social media posts. It even helps you remove backgrounds!',
    instructions: ['Start with a template.', 'Change the pictures and text.', 'Add some stickers or filters.', 'Share it with your friends!'],
    icon: '🪄', category: 'creative', href: '#/creative/adobe-express', externalLink: 'https://express.adobe.com/', isPopular: true
  },
  { 
    id: 'c-fotor', 
    name: 'Photo Editor', 
    description: 'Make your pictures look beautiful.', 
    longDescription: 'A friendly photo editor that helps you crop, brighten, and fix your photos instantly.',
    instructions: ['Upload your photo.', 'Click the enhancement buttons.', 'Add a frame or some text.', 'Save your pretty picture!'],
    icon: '🖼️', category: 'creative', href: '#/creative/fotor', externalLink: 'https://www.fotor.com/'
  },

  // --- AUDIO TOOLS ---
  { 
    id: 'a-cut', 
    name: 'Song Cutter', 
    description: 'Cut your favorite songs or make ringtones.', 
    longDescription: 'Want just the chorus of a song? This tool makes it super easy to trim audio files.',
    instructions: ['Upload a song.', 'Select the part you want to keep.', 'Click Cut.', 'Save your new sound file!'],
    icon: '🎵', category: 'audio', href: '#/audio/cutter', externalLink: 'https://mp3cut.net/', isPopular: true 
  },
  { 
    id: 'a-rec', 
    name: 'Voice Recorder', 
    description: 'Record yourself speaking using your mic.', 
    longDescription: 'Great for recording notes, interviews, or voiceovers for your school videos.',
    instructions: ['Click the microphone.', 'Start talking!', 'Stop when you are finished.', 'Save your voice as an MP3.'],
    icon: '🎤', category: 'audio', href: '#/audio/recorder', externalLink: 'https://online-voice-recorder.com/'
  },

  // --- PDF TOOLS ---
  { 
    id: 'p-merge', 
    name: 'PDF Joiner', 
    description: 'Combine several PDF files into one.', 
    longDescription: 'If you have separate school assignments, use this to put them all into one single document.',
    instructions: ['Select your PDF files.', 'Put them in order.', 'Click Merge.', 'Download your single file.'],
    icon: '📚', category: 'pdf', href: '#/pdf/merge', externalLink: 'https://123apps.com/merge-pdf', isPopular: true 
  },
  { 
    id: 'p-word', 
    name: 'PDF to Word', 
    description: 'Turn a PDF back into a Word document.', 
    longDescription: 'Need to edit a PDF? Turn it into a Word file so you can type in it easily!',
    instructions: ['Upload your PDF.', 'Choose Word format.', 'Wait a second for it to convert.', 'Open it in Word and start typing!'],
    icon: '📄', category: 'pdf', href: '#/pdf/pdf-to-word', externalLink: 'https://123apps.com/pdf-to-word'
  },

  // --- CONVERTERS ---
  { 
    id: 'c-image', 
    name: 'Image Converter', 
    description: 'Change any image to a different format.', 
    longDescription: 'Easily change photos from JPG to PNG, or any other type of image file.',
    instructions: ['Pick your photos.', 'Choose the new format.', 'Click Convert.', 'Get your new images!'],
    icon: '📸', category: 'converters', href: '#/converters/image', externalLink: 'https://123apps.com/image-converter', isPopular: true 
  },

  // --- UTILITIES ---
  { 
    id: 'u-screen', 
    name: 'Screen Recorder', 
    description: 'Record your screen for tutorials.', 
    longDescription: 'Great for showing someone how to do something on a computer or recording a game!',
    instructions: ['Choose what to record.', 'Press the record button.', 'Stop when you are done.', 'Save your video!'],
    icon: '🖥️', category: 'utilities', href: '#/utilities/screen-recorder', externalLink: 'https://online-video-cutter.com/screenrecorder', isNew: true 
  },
  { 
    id: 'u-unzip', 
    name: 'Zip Opener', 
    description: 'Open zip and rar folders easily.', 
    longDescription: 'If someone sends you a zip file, use this to see and download what is inside.',
    instructions: ['Upload the zip file.', 'See all the files inside.', 'Pick what you want.', 'Download them to your computer.'],
    icon: '🗃️', category: 'utilities', href: '#/utilities/extractor', externalLink: 'https://extract.me/'
  },
];
