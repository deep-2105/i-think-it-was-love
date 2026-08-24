import { useMemo, useState } from 'react'
import '../styles/storyArchive.css'
import '../styles/storyArchiveMobile.css'

const chapters = [
  {
    id: 'chapter-01',
    title: 'THE BEGINNING',
    pages: [
      {
        id: 'chapter-01-page-01',
        title: 'UNIVERSITY',
        subtitle: 'THE FIRST THREAD',
        badge: 'Competitive Coding',
        paragraphs: [
          'We met at university. Different courses. Different routines. But somehow, there was one class we shared.',
          'Competitive Coding. It was ordinary. Quiet. Simple. And yet, that ordinary class became the place where this story quietly began.',
          'Neither of us knew it at the time. We were just two people in the same room, passing through the same hours, learning the same things.',
        ],
        visual: 'classroom',
      },
      {
        id: 'chapter-01-page-02',
        title: 'THE TEST',
        subtitle: 'A REASON TO TALK',
        badge: 'Little moments',
        paragraphs: [
          'One day there was a test. He was sitting on the bench in front of me. We had to communicate because of the questions, because of the answers, because we were both trying to make it through the same moment.',
          'It was not dramatic. It was not supposed to be anything important. But small moments can carry a lot more weight than they look like they do at first.',
          'That was the first time there was an actual reason for us to exchange words.',
        ],
        visual: 'test',
      },
      {
        id: 'chapter-01-page-03',
        title: 'THE NOTEBOOK',
        subtitle: 'THE FIRST THING HE NOTICED',
        badge: 'The notebook',
        paragraphs: [
          'I had a fancy vintage notebook. It looked different enough to catch his attention.',
          'He noticed it. He asked me about it. And somehow, that notebook became the first thread between us.',
          'It is funny how a small object can start a whole story. Before there were messages, before there were calls, before we knew what this would become, there was just a notebook and a moment of interest.',
        ],
        visual: 'notebook',
      },
      {
        id: 'chapter-01-page-04',
        title: 'FIRST IMPRESSION',
        subtitle: 'THE VIBE',
        badge: 'Quiet recognition',
        paragraphs: [
          'I do not know how to explain it properly. I just liked his vibe.',
          'There was something about the way he carried himself that felt different to me. It was not a logical thought. It was more like an instinct.',
          'Sometimes you do not know why someone catches your attention. They just do.',
        ],
        visual: 'hallway',
      },
      {
        id: 'chapter-01-page-05',
        title: 'AFTER CLASS',
        subtitle: 'THE MISUNDERSTANDING',
        badge: 'Same moment',
        paragraphs: [
          'After class, I saw him passing by. He looked at me. And then he did not smile.',
          'That was enough for my brain to decide: “Kitna rude ladka hai ye.”',
          'I moved on. I thought that was simply the kind of person he was. Only later did I realise that from his side, he had thought I had ignored him.',
        ],
        visual: 'split',
      },
      {
        id: 'chapter-01-page-06',
        title: 'THE SAME MOMENT',
        subtitle: 'TWO DIFFERENT MEMORIES',
        badge: 'Memory split',
        paragraphs: [
          'The strange thing about memories is that two people can stand inside the exact same second and remember completely different stories.',
          'One of us felt a distance. The other felt confusion. Neither of us had the full picture yet.',
          'And somehow, that is what made the beginning feel so quietly alive.',
        ],
        visual: 'split',
      },
