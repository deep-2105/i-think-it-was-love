import { useMemo, useState } from 'react'
import '../styles/storyArchive.css'

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
      {
        id: 'chapter-01-page-07',
        title: 'THE RETURN',
        subtitle: 'WAITING',
        badge: 'Absence',
        paragraphs: [
          'Then, for a few days, I did not attend the class. According to him, he was waiting for me to come back.',
          'Which still makes me smile. Apparently, somewhere between the test and the notebook and the misunderstanding, he had already started noticing my absence.',
          'There was just one problem: he had forgotten my name. The girl was memorable enough to wait for, but the name was not.',
        ],
        visual: 'classroom-empty',
      },
      {
        id: 'chapter-01-page-08',
        title: 'THE NOTEBOOK REMEMBERS',
        subtitle: 'THE BEGINNING',
        badge: 'Closing shot',
        paragraphs: [
          'He forgot my name, but apparently he did not forget the notebook. And maybe that is what makes the beginning of this story so beautiful.',
          'Before messages, before calls, before we knew what this would become, there was just a classroom, a test, a notebook, and two people who did not even realise they had already noticed each other.',
          'Some stories begin quietly. Then they slowly become everything.',
        ],
        visual: 'memory-end',
      },
    ],
  },
  {
    id: 'chapter-02',
    title: 'THE MESSAGE',
    pages: [
      {
        id: 'chapter-02-page-01',
        title: 'THE SEARCH',
        subtitle: 'THE NAME HE FORGOT',
        badge: 'University desk',
        paragraphs: [
          'For a few days, I did not go to class. And apparently, he had noticed.',
          'There was just one problem: he had forgotten my name.',
          'So somehow, the same boy who had noticed my notebook and was apparently waiting for me to come back now had to figure out who I actually was.',
          'And somehow, he found my name in our professor’s Excel sheet. Then he searched for me on Instagram.',
        ],
        visual: 'instagram',
      },
      {
        id: 'chapter-02-page-02',
        title: 'THE COMMENT',
        subtitle: 'THE NOTEBOOK FOUND ITS WAY BACK',
        badge: 'The reply',
        paragraphs: [
          'He found me on Instagram. And then he commented on one of my reels.',
          'The caption said: “this is how obsessed I want my man to be with me.”',
          'And his reply was: “obsessed with your fancy diary.”',
          'Of all the things he could have said, he remembered the notebook.',
        ],
        visual: 'comment',
      },
      {
        id: 'chapter-02-page-03',
        title: 'THE REPLY',
        subtitle: 'A CONVERSATION BEGINS',
        badge: 'Thread between us',
        paragraphs: [
          'I replied. He replied back. And somehow, something that could have been just another random Instagram interaction did not stay random.',
          'We started talking. It was still small. Still casual. But there was now a thread between us.',
          'A reason to talk. A reason to look for the next message. A reason to wonder where this would go.',
        ],
        visual: 'chat',
      },
      {
        id: 'chapter-02-page-04',
        title: '13 MAY 2026',
        subtitle: 'THE FIRST REAL MESSAGE',
        badge: 'The first message',
        paragraphs: [
          'Then came 13 May 2026. I posted something on my story that was kind of sad. And he messaged me.',
          'It was the first message that felt different. He said: “Kya hua bacha? Call kru?”',
          'I still remember those words. Not because they were complicated, but because someone had noticed that something was wrong. And instead of just watching the story disappear, he asked.',
        ],
        visual: 'message',
      },
      {
        id: 'chapter-02-page-05',
        title: 'THE VOICE NOTES',
        subtitle: 'SOMEHOW, HIS VOICE BECAME FAMILIAR',
        badge: 'Voice notes',
        paragraphs: [
          'He was from Haryana. And I used to tell him: “Talk to me in Haryanvi.”',
          'So he started sending me voice notes in Haryanvi. I do not know when it happened, but somewhere between those random voice notes and late-night talks, his voice started becoming familiar.',
          'Comforting, even. It was no longer just a person from my class. He was becoming someone I looked forward to hearing from.',
        ],
        visual: 'voice',
      },
      {
        id: 'chapter-02-page-06',
        title: 'THE FIRST MEETING',
        subtitle: 'ICE CREAM',
        badge: 'Outside college',
        paragraphs: [
          'Then we met outside college. He had already asked me for ice cream. So we went out.',
          'We smoked. We had ice cream. We talked. It was not some grand romantic scene. It was simple.',
          'But I remember how natural it felt. There was no effort in making the moment special. It just was.',
        ],
        visual: 'meeting',
      },
      {
        id: 'chapter-02-page-07',
        title: '15 MAY 2026',
        subtitle: 'CARE',
        badge: 'Quiet tenderness',
        paragraphs: [
          'Before we met on 15 May, my bua amma had passed away. It was a difficult time for me. And that day, he was there with me.',
          'I noticed the way he cared. The way he stayed. The way he handled me without making me feel like I was too much.',
          'And something changed inside me. That was the day I realised I had started falling in love with him.',
          'After feeling alone for so long because of everything I had been through, that feeling of loneliness started becoming quieter.',
        ],
        visual: 'care',
      },
      {
        id: 'chapter-02-page-08',
        title: '24 MAY 2026',
        subtitle: 'THE CONFESSION',
        badge: 'Quiet happiness',
        paragraphs: [
          'We had a small argument. And somehow, that argument brought something out into the open.',
          'He confessed his feelings. And I confessed mine too. 24 May 2026.',
          'I remember how happy I was. How much I was blushing. How genuinely, ridiculously happy I felt.',
          'After that, the nights became ours in their own strange little way. We started talking almost every night.',
        ],
        visual: 'phone',
      },
    ],
  },
  {
    id: 'chapter-03',
    title: 'THE NIGHTS',
    pages: [
      {
        id: 'chapter-03-page-01',
        title: 'AFTER THE CONFESSION',
        subtitle: 'THE WORLD GOT WARMER',
        badge: 'Late-night glow',
        paragraphs: [
          'After 24 May 2026, we started talking almost every night. The conversations became a kind of rhythm.',
          'There was no need to force anything. We would be on calls while talking. Sometimes we would talk until it felt like the whole night had become a place between us.',
          'And it felt easy. Not because the world had become simple, but because there was comfort in how familiar it started to feel.',
        ],
        visual: 'late-night-room',
      },
      {
        id: 'chapter-03-page-02',
        title: 'THE CALLS',
        subtitle: 'TWO WORLDS, ONE CONNECTION',
        badge: 'Connected',
        paragraphs: [
          'We stayed on calls while talking. We spoke about random things and serious things and nothing things in between.',
          'It felt as if the distance between us had become a thread instead of a wall. The conversations carried us from one hour to the next.',
          'And even when we were not saying anything important, there was still a kind of closeness in the silence.',
        ],
        visual: 'two-locations',
      },
      {
        id: 'chapter-03-page-03',
        title: 'FALLING ASLEEP',
        subtitle: 'WHEN THE CALL DIDN’T END',
        badge: 'Still connected',
        paragraphs: [
          'Sometimes we would literally fall asleep while the call was still running.',
          'The phone would stay there on the bed, still glowing in the dark, while the room went quiet around us.',
          'I remember thinking that the night felt safe in a way I had not felt in a long time. Not because everything was fixed, but because I was not alone in it.',
        ],
        visual: 'bedside-phone',
      },
      {
        id: 'chapter-03-page-04',
        title: 'THE SMALL THINGS',
        subtitle: 'A ROUTINE OF QUIET CARE',
        badge: 'Routine',
        paragraphs: [
          'It was not a big romantic story in the usual sense. It was the small things that made it feel alive.',
          'The notebook. The water glass. The earphones. The phone resting beside the study material. The little rituals of being in the same mental space, even from different places.',
          'Those moments kept accumulating into something warm.',
        ],
        visual: 'desk-routine',
      },
      {
        id: 'chapter-03-page-05',
        title: 'STUDIES',
        subtitle: 'WE TALKED ABOUT EVERYTHING',
        badge: 'Learning together',
        paragraphs: [
          'We talked about studies. We talked about doubts. We talked about what we were trying to achieve and how tired we were becoming.',
          'And in the middle of all of that, there was also encouragement. A strange kind of motivation that felt gentle instead of pressure.',
          'It was not just emotional closeness. It was practical care too.',
        ],
        visual: 'study-desks',
      },
      {
        id: 'chapter-03-page-06',
        title: 'MOTIVATION',
        subtitle: 'HE CARED',
        badge: 'Support',
        paragraphs: [
          'He motivated me. He cared. He handled my emotions without getting irritated, even when I was overwhelmed or unsure of myself.',
          'That mattered more than I can explain in a few lines. It made me feel less like a burden and more like someone who was allowed to be human.',
          'And I started feeling something I had not allowed myself to feel in a very long time: steadiness.',
        ],
        visual: 'motivation',
      },
      {
        id: 'chapter-03-page-07',
        title: 'THE HAPPINESS',
        subtitle: 'IT WAS QUIET, BUT IT WAS REAL',
        badge: 'Open sky',
        paragraphs: [
          'I felt genuinely happy after a very long time. There was no grand drama around it. It was not loud. It was simply real.',
          'The loneliness I had carried for so long started becoming quieter. I could feel it shifting, little by little, in the spaces where it had lived for too long.',
          'And that felt almost sacred.',
        ],
        visual: 'sunrise',
      },
      {
        id: 'chapter-03-page-08',
        title: 'OUR LITTLE ROUTINE',
        subtitle: 'A LIFE IN SMALL MOMENTS',
        badge: 'The rhythm',
        paragraphs: [
          'It was not a perfect story. It was a real one. And in real stories, happiness usually shows up in routine more than in thunder.',
          'Late-night conversations. Study help. Voice notes. The phone beside the notebook. The call that stayed on while we drifted to sleep.',
          'That was our little routine. And it was beautiful in the ordinary way that most beautiful things are.',
        ],
        visual: 'notebook-phone',
      },
    ],
  },
  {
    id: 'chapter-04',
    title: 'THE DISTANCE',
    pages: [
      {
        id: 'chapter-04-page-01',
        title: 'SOMETHING CHANGED',
        subtitle: 'THE SHIFT',
        badge: 'Quiet change',
        paragraphs: [
          'At some point, things started changing. The conversations became less frequent. The replies became slower.',
          'I noticed. It was not dramatic in the moment. It was more like a small dissonance that kept growing until I could feel it in my chest.',
          'Something had shifted, and I did not understand why.',
        ],
        visual: 'empty-chat',
      },
      {
        id: 'chapter-04-page-02',
        title: 'FEWER WORDS',
        subtitle: 'THE MOMENT BEFORE THE QUESTION',
        badge: 'Quiet silence',
        paragraphs: [
          'Messages became fewer. The tone changed. There was more silence between the words than before.',
          'I told myself maybe it was just life. Maybe I was overthinking. But there was a part of me that knew this was not ordinary drift.',
          'It felt like the room had become emptier without anything obvious happening.',
        ],
        visual: 'clock',
      },
      {
        id: 'chapter-04-page-03',
        title: 'THE WAIT',
        subtitle: 'I WAITED FOR EXPLANATION',
        badge: 'Unanswered',
        paragraphs: [
          'I waited. I wondered. I checked my phone more often than I wanted to admit. The gap between replies made me more nervous than I wanted to be.',
          'And because I cared, I kept trying to find the reason in the pattern of our conversations.',
          'But the answer never came quickly. It only came later, in a way that made the silence feel heavier.',
        ],
        visual: 'waiting-phone',
      },
      {
        id: 'chapter-04-page-04',
        title: 'THE QUESTIONS',
        subtitle: 'WHAT WAS WRONG?',
        badge: 'The question',
        paragraphs: [
          'I asked myself questions I did not know how to answer. Was I imagining it? Was I being too much? Was he tired? Was something happening that I did not know about?',
          'I wanted clarity, but I also did not want to make him feel crowded or pressured.',
          'And so I sat with the discomfort for a while, trying to be gentle with both of us.',
        ],
        visual: 'question-window',
      },
      {
        id: 'chapter-04-page-05',
        title: 'I ASKED',
        subtitle: 'THE TRUTH',
        badge: 'Direct',
        paragraphs: [
          'Eventually I asked him what was wrong. I needed to know. It was the only honest thing I could do.',
          'He told me he needed to focus on himself. He said he needed some time.',
          'It was not cruel. It was not a dramatic betrayal. It was simply a change that I did not understand in the middle of loving him.',
        ],
        visual: 'phone-message',
      },
      {
        id: 'chapter-04-page-06',
        title: 'HE NEEDED TIME',
        subtitle: 'NOT A VILLAIN',
        badge: 'Understanding',
        paragraphs: [
          'I will not portray him as a villain. That would be wrong. The truth is more complicated than that.',
          'He was trying to deal with his own life. He needed time for himself. He needed space to sort through things he had not yet figured out.',
          'I respected that, even while the silence hurt me.',
        ],
        visual: 'empty-classroom',
      },
      {
        id: 'chapter-04-page-07',
        title: 'THE SILENCE',
        subtitle: 'A QUIETER KIND OF PAIN',
        badge: 'Fading light',
        paragraphs: [
          'The silence was not loud, but it was there. It sat in the gaps between messages. In the unanswered thoughts. In the way the room felt different when I looked at my phone and there was no new message waiting.',
          'The worst part was that I could not name the exact moment it became real. It was just gradual and then undeniable.',
        ],
        visual: 'fading-light',
      },
      {
        id: 'chapter-04-page-08',
        title: 'THE QUESTION WITHOUT AN ANSWER',
        subtitle: 'THE CHANGE',
        badge: 'Unanswered',
        paragraphs: [
          'And though he said he needed time, there was still a question no one could answer for me: what had changed?',
          'Not in a dramatic, cinematic way. Just quietly. Slowly. In the places where conversation used to feel easy and then no longer did.',
          'I did not have a villain to blame. I just had a story that had become uncertain.',
        ],
        visual: 'unfinished-notebook',
      },
    ],
  },
  {
    id: 'chapter-05',
    title: 'THE END',
    pages: [
      {
        id: 'chapter-05-page-01',
        title: '24 JULY 2026',
        subtitle: 'THE DAY IT BECAME CLEAR',
        badge: 'The message',
        paragraphs: [
          '24 July 2026. The day the story became undeniable. The day the words arrived and there was no room left for misunderstanding.',
          'It was not a dramatic scene. There was no shouting. No loud argument. Just a message, and then a quiet kind of collapse inside me.',
        ],
        visual: 'single-phone',
      },
      {
        id: 'chapter-05-page-02',
        title: 'THE QUESTION',
        subtitle: 'WHAT HAPPENS WHEN THE ANSWER ARRIVES?',
        badge: 'The question',
        paragraphs: [
          'I had been carrying the weight of uncertainty for a long time. The silence had become a habit. The not-knowing had started to feel normal.',
          'Then the message came. And the question changed. Not from “what is wrong?” to “why?” but from “what if?” to “what now?”',
        ],
        visual: 'question-screen',
      },
      {
        id: 'chapter-05-page-03',
        title: 'THE ANSWER',
        subtitle: 'THE TRUTH',
        badge: 'Honest',
        paragraphs: [
          'The answer was not cruel. It was simply final. It was the truth he had been trying to carry in his own way.',
          'He said he did not think he could continue the relationship. He said it was not me. He said he was incompetent. He said he needed to focus on himself.',
        ],
        visual: 'message-split',
      },
      {
        id: 'chapter-05-page-04',
        title: 'I’M REALLY SORRY',
        subtitle: 'THE MESSAGE, PART ONE',
        badge: 'The words',
        paragraphs: [
          '“I’m really sorry, for leaving you clueless.”',
          '“But to share my honest thoughts, I don’t think I can continue this relationship.”',
          '“It’s not you, it’s me who is incompetent.”',
          '“You are too good of a person, and I think I am not.”',
        ],
        visual: 'message-card',
      },
      {
        id: 'chapter-05-page-05',
        title: 'I NEED TO FOCUS ON MYSELF',
        subtitle: 'THE MESSAGE, PART TWO',
        badge: 'The honesty',
        paragraphs: [
          '“And with all this going in my life, I think I should just focus on myself.”',
          '“And yes I am happy to be close to you, always have been.”',
          'These were the words he gave me. Not a grand punishment. Not a cruel explanation. Just a painful and honest truth.',
        ],
        visual: 'message-window',
      },
      {
        id: 'chapter-05-page-06',
        title: 'THE DECISION',
        subtitle: 'I AGREED',
        badge: 'Let go',
        paragraphs: [
          'I agreed. I did not want to force him to stay. I did not want to hand him love in a way that would make it heavier for him.',
          'Even so, the tears were real. The words stayed in my head. The relationship had become one-sided before I even realised it.',
          'And still, love had not stopped being love just because it was ending.',
        ],
        visual: 'window-chair',
      },
      {
        id: 'chapter-05-page-07',
        title: 'THE TEARS',
        subtitle: 'THE QUIET AFTERMATH',
        badge: 'It hurt',
        paragraphs: [
          'The pain was not loud. It did not arrive in a single dramatic moment. It was in the aftershock.',
          'The tears were real. The silence after the message was real. The feeling of losing something important before you had time to understand how important it had become.',
          'It hurt. And I could not pretend otherwise.',
        ],
        visual: 'tears',
      },
      {
        id: 'chapter-05-page-08',
        title: 'LETTING GO',
        subtitle: 'THE END OF THE CHAPTER',
        badge: 'The release',
        paragraphs: [
          'And then I let it be what it was. Not a defeat. Not a failure. Just an ending with a painful kind of truth inside it.',
          'I did not become bitter. I did not become cruel. I simply accepted that the story had changed shape.',
          'Some losses are not loud. Some are quiet. But they still leave a mark.',
        ],
        visual: 'empty-room',
      },
    ],
  },
  {
    id: 'chapter-06',
    title: 'ONE MORE AFTERNOON',
    pages: [
      {
        id: 'chapter-06-page-01',
        title: '17 AUGUST',
        subtitle: 'THE QUESTION',
        badge: 'Ask again',
        paragraphs: [
          'I asked him for a movie on 17 August. It was a simple question, but it carried a lot of weight.',
          'The relationship had ended. The confusion had not fully left. And yet, there was still a strange openness in that request.',
          'We had not fixed everything. But we were still talkable. Still human with each other.',
        ],
        visual: 'calendar-question',
      },
      {
        id: 'chapter-06-page-02',
        title: 'THE QUESTION',
        subtitle: 'DO YOU WANT TO GO?',
        badge: 'The ask',
        paragraphs: [
          'It was a tiny, vulnerable thing to ask. Maybe that is why it mattered so much.',
          'I was not asking for a reunion. I was asking for one afternoon. One simple, ordinary time that was not tangled up in everything else.',
          'And he said yes.',
        ],
        visual: 'ticket',
      },
      {
        id: 'chapter-06-page-03',
        title: 'HE SAID YES',
        subtitle: 'THE RELIEF',
        badge: 'Acceptance',
        paragraphs: [
          'He agreed. The relief was immediate and quiet. Not because everything was fixed, but because the possibility of a peaceful afternoon still existed.',
          'There was no dramatic promise in that yes. Just a door opening a little before it closed again.',
          'And I was grateful for that.',
        ],
        visual: 'yes-ticket',
      },
      {
        id: 'chapter-06-page-04',
        title: '19 AUGUST',
        subtitle: 'WE WENT',
        badge: 'The outing',
        paragraphs: [
          'And on 19 August, we went. We watched the movie. We talked. We sat there in the theater lights and there was no complicated question hanging over us.',
          'It felt strangely normal. He behaved normally. I felt normal. And for those hours, the story did not need to be solved.',
          'It just existed in the quiet honesty of the moment.',
        ],
        visual: 'movie-theater',
      },
      {
        id: 'chapter-06-page-05',
        title: 'THE MOVIE',
        subtitle: 'THE SCREEN, THE QUIET, THE AIR',
        badge: 'Cinema',
        paragraphs: [
          'The movie was not the point. The point was how easy it felt to be there together without needing to explain anything.',
          'The dim theater lights made everything softer. The room felt like a temporary shelter from the rest of the world.',
          'There was no pressure. No demand. Just a shared afternoon.',
        ],
        visual: 'cinema-seats',
      },
      {
        id: 'chapter-06-page-06',
        title: 'THE AFTERNOON',
        subtitle: 'PEACE',
        badge: 'After the uncertainty',
        paragraphs: [
          'We left afterwards and the air outside felt different. The afternoon was still ordinary, but it was no longer heavy with unanswered feeling.',
          'There was peace in that. Real peace. Not a restoration of the past, but a moment where everything was simply calm.',
          'It was enough to make me feel good again.',
        ],
        visual: 'outside-afternoon',
      },
      {
        id: 'chapter-06-page-07',
        title: 'PEACE',
        subtitle: 'A GENTLE KIND OF HOLDING',
        badge: 'Afternoon return',
        paragraphs: [
          'I felt good. Really good. It struck me how much relief there can be in a time that is not dramatic or grand.',
          'Not everything has to be a reunion to be meaningful. Sometimes it is enough that a person can sit beside you in peace for a while without the past demanding an answer.',
        ],
        visual: 'two-silhouettes',
      },
      {
        id: 'chapter-06-page-08',
        title: 'ONE OF THE BEST TIMES',
        subtitle: 'THE BEAUTY OF ORDINARY PEACE',
        badge: 'Good memory',
        paragraphs: [
          'It was one of the best times I had with him. Not because it fixed anything. Not because it became a story of return.',
          'It was beautiful because it was simple. Calm. Honest. Uncomplicated in the best possible way.',
          'And sometimes those are the memories that rattle you the most, because they remind you that peace was always possible even in a messy ending.',
        ],
        visual: 'movie-afternoon',
      },
    ],
  },
  {
    id: 'chapter-07',
    title: 'LOVING FROM A DISTANCE',
    pages: [
      {
        id: 'chapter-07-page-01',
        title: 'I STILL LOVE HIM',
        subtitle: 'THE TRUTH',
        badge: 'Quiet love',
        paragraphs: [
          'I still love him. That is the truth of it. Not in some dramatic, impossible way, but in a deeply personal one.',
          'It did not disappear because the relationship ended. It simply changed shape. It became more inward, less demanding, less attached to being answered.',
        ],
        visual: 'window-night',
      },
      {
        id: 'chapter-07-page-02',
        title: 'WITHOUT TELLING HIM',
        subtitle: 'A LOVE KEPT QUIET',
        badge: 'Private feeling',
        paragraphs: [
          'And strangely, there is something peaceful about loving someone without telling them. Without asking them to return it.',
          'There is no waiting in that kind of love. No demand. No expectation of a message turning up exactly at the right time.',
          'It is just the feeling existing inside me, and the choice to let it be gentle instead of exhausting.',
        ],
        visual: 'turned-phone',
      },
      {
        id: 'chapter-07-page-03',
        title: 'NO WAITING',
        subtitle: 'NO EXPECTATIONS',
        badge: 'Release',
        paragraphs: [
          'I do not wait for a message. I do not wonder when he will call. I do not build my day around a reply that may never come.',
          'That kind of waiting only makes love feel like a burden. The more honest version is this: I can love him quietly without making it his responsibility.',
        ],
        visual: 'phone-face-down',
      },
      {
        id: 'chapter-07-page-04',
        title: 'NO EXPECTATIONS',
        subtitle: 'THE FREEDOM OF LETTING GO',
        badge: 'Freedom',
        paragraphs: [
          'A lot of pain in love comes from expectation. From imagining someone is going to arrive in the exact way you hope they will.',
          'But the truth is that love can exist without being given a place to stay. It can exist without asking for anything in return.',
          'It just becomes a quiet feeling instead of a demand.',
        ],
        visual: 'notebook-window',
      },
      {
        id: 'chapter-07-page-05',
        title: 'IMAGINATION',
        subtitle: 'THE WAY MEMORY STILL FEELS',
        badge: 'Inward',
        paragraphs: [
          'Sometimes I talk to him in my imagination. Sometimes I remember what it felt like to be comforted by his voice. Sometimes I think of the way he used to make the world feel less strange.',
          'There is nothing dramatic about that. It is just my mind meeting the memory and letting it exist without twisting it into something else.',
        ],
        visual: 'night-sky',
      },
      {
        id: 'chapter-07-page-06',
        title: 'I DON’T HATE HIM',
        subtitle: 'THE PEACE OF NOT RESENTING',
        badge: 'Acceptance',
        paragraphs: [
          'I do not hate him. I do not think I ever could. And perhaps that is one of the most honest things about this story.',
          'It mattered. It changed me. It made me happy, and it hurt me, and it taught me something important about the kind of love I could carry inside myself.',
          'I can hold all of that without making him into an enemy.',
        ],
        visual: 'window-silence',
      },
      {
        id: 'chapter-07-page-07',
        title: 'LETTING TIME DO ITS WORK',
        subtitle: 'THE FEELING DOESN’T HAVE TO BE FORCED',
        badge: 'Passage',
        paragraphs: [
          'I am learning to let time do its work. I do not need to force myself to stop feeling. I do not need to speed up the process.',
          'Sometimes the only honest thing is to let it remain as it is for now, and trust that feelings can soften without becoming less real.',
        ],
        visual: 'time-clock',
      },
      {
        id: 'chapter-07-page-08',
        title: 'SOMEDAY IT WILL FADE',
        subtitle: 'OR MAYBE IT WON’T',
        badge: 'The future',
        paragraphs: [
          'Maybe one day this feeling will fade. Maybe one day it will become only a memory. Or maybe it will remain as a quiet chapter in me, a part of my life that changed something permanently.',
          'I do not know. But I do know that it was real. And that matters more than trying to make it into something official or permanent.',
        ],
        visual: 'quiet-night',
      },
    ],
  },
  {
    id: 'chapter-08',
    title: 'WHAT REMAINS',
    pages: [
      {
        id: 'chapter-08-page-01',
        title: 'WHAT THIS WAS',
        subtitle: 'REAL, EVEN IF IT ENDED',
        badge: 'Memory',
        paragraphs: [
          'This was real. It mattered. It made me happy. It changed something inside me.',
          'It was not a perfect story. It was not a fairytale. It was a human story. Soft, complicated, warm, and unresolved in ways that still remind me of the life I was living then.',
        ],
        visual: 'old-notebook',
      },
      {
        id: 'chapter-08-page-02',
        title: 'THE BOY FROM THE CLASSROOM',
        subtitle: 'THE BEGINNING',
        badge: 'Then',
        paragraphs: [
          'He was the boy from the classroom. The one I had first noticed in the ordinary rhythm of university life.',
          'The one who had forgotten my name and then somehow found it again. The one whose attention made me feel seen, even before we knew each other well.',
        ],
        visual: 'classroom-glow',
      },
      {
        id: 'chapter-08-page-03',
        title: 'THE NOTEBOOK',
        subtitle: 'THE THREAD',
        badge: 'Memory object',
        paragraphs: [
          'And then there was the notebook. The vintage, fancy thing that started the whole conversation.'
          ,'It seems so small now, but it was the first proof that some connections really do begin in ordinary details.',
          'The object that noticed us before we fully noticed each other.',
        ],
        visual: 'vintage-book',
      },
      {
        id: 'chapter-08-page-04',
        title: 'THE CALLS',
        subtitle: 'THE COMFORT',
        badge: 'Night rhythm',
        paragraphs: [
          'The calls. The late-night conversations. The voice notes. The way the phone would still be on while sleep came softly over us.',
          'Those were not just moments. They were the shape of a feeling that had started to feel safe.',
        ],
        visual: 'phone-and-notebook',
      },
      {
        id: 'chapter-08-page-05',
        title: 'THE CARE',
        subtitle: 'THE THING THAT CHANGED ME',
        badge: 'Gentleness',
        paragraphs: [
          'And then there was the care. The way he handled me without making me feel too much. The way he stayed when I needed someone to be there.'
          ,'That care reached somewhere deep in me. It made me feel less alone. And I will not forget that.',
        ],
        visual: 'care-memory',
      },
      {
        id: 'chapter-08-page-06',
        title: 'THE GOODBYE',
        subtitle: 'THE PAIN',
        badge: 'Goodbye',
        paragraphs: [
          'Then came the goodbye. It was painful. It was real. It changed the shape of what I had been carrying.',
          'I did not want to force him. I did not want to turn love into guilt. I just wanted to be honest with myself and with him.',
        ],
        visual: 'door-window',
      },
      {
        id: 'chapter-08-page-07',
        title: 'THE MEMORY',
        subtitle: 'IT STILL LIVES',
        badge: 'Quiet persistence',
        paragraphs: [
          'I do not know whether our paths will cross again. I do not know whether we will meet again. I do not know what the years will do.'
          ,'But I genuinely want him to get everything he wants in life. And I do not think I will ever hate him.',
        ],
        visual: 'memory-table',
      },
      {
        id: 'chapter-08-page-08',
        title: 'THE LAST PAGE',
        subtitle: 'SOME STORIES END WITHOUT DISAPPEARING',
        badge: 'Final page',
        paragraphs: [
          'Some stories do not end because they stopped mattering. Sometimes they end because life keeps moving.',
          'This one mattered. It shaped something inside me. It made me happy. It hurt me. It taught me how deeply a person can affect another person without even meaning to.',
          'Thank you for being a beautiful part of my story.',
          'THE END.',
        ],
        visual: 'final-page',
      },
    ],
  },
]

function StoryArchive({ onBackToDashboard }) {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [isTurning, setIsTurning] = useState(false)
  const [turnDirection, setTurnDirection] = useState('next')
  const [storyEnded, setStoryEnded] = useState(false)

  const chapter = chapters[currentChapter]
  const page = chapter.pages[currentPage]
  const isChapterSix = currentChapter === 5

  const pageNumbers = useMemo(
    () => Array.from({ length: chapter.pages.length }, (_, index) => index),
    [chapter.pages.length],
  )

  const triggerTurn = (direction) => {
    setTurnDirection(direction)
    setIsTurning(true)
    window.setTimeout(() => {
      setIsTurning(false)
      setTurnDirection('next')
    }, 360)
  }

  const goToChapter = (chapterIndex) => {
    setStoryEnded(false)
    setCurrentChapter(chapterIndex)
    setCurrentPage(0)
    triggerTurn(chapterIndex > currentChapter ? 'next' : 'prev')
  }

  const goToPage = (pageIndex) => {
    if (pageIndex === currentPage) return
    setStoryEnded(false)
    setCurrentPage(pageIndex)
    triggerTurn(pageIndex > currentPage ? 'next' : 'prev')
  }

  const previousPage = () => {
    if (storyEnded) {
      setStoryEnded(false)
      setCurrentChapter(chapters.length - 1)
      setCurrentPage(chapters[chapters.length - 1].pages.length - 1)
      return
    }

    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      triggerTurn('prev')
      return
    }

    if (currentChapter > 0) {
      const previousChapterIndex = currentChapter - 1
      const previousChapter = chapters[previousChapterIndex]
      setCurrentChapter(previousChapterIndex)
      setCurrentPage(previousChapter.pages.length - 1)
      triggerTurn('prev')
    }
  }

  const nextPage = () => {
    if (storyEnded) {
      setStoryEnded(false)
      setCurrentChapter(0)
      setCurrentPage(0)
      return
    }

    if (currentPage < chapter.pages.length - 1) {
      setCurrentPage(currentPage + 1)
      triggerTurn('next')
      return
    }

    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
      setCurrentPage(0)
      triggerTurn('next')
      return
    }

    setStoryEnded(true)
  }

  const renderVisual = () => {
    const baseClass = `story-archive__visual story-archive__visual--${page.visual}`

    switch (page.visual) {
      case 'classroom':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__wall" />
            <div className="story-archive__window" />
            <div className="story-archive__board">COMPETITIVE CODING</div>
            <div className="story-archive__desk story-archive__desk--one" />
            <div className="story-archive__desk story-archive__desk--two" />
            <div className="story-archive__chair story-archive__chair--one" />
            <div className="story-archive__chair story-archive__chair--two" />
            <div className="story-archive__notebook-small">
              <span>MEMORY</span>
            </div>
          </div>
        )
      case 'test':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__paper" />
            <div className="story-archive__pen" />
            <div className="story-archive__desk-pair story-archive__desk-pair--left" />
            <div className="story-archive__desk-pair story-archive__desk-pair--right" />
            <div className="story-archive__silhouette story-archive__silhouette--front" />
            <div className="story-archive__silhouette story-archive__silhouette--rear" />
          </div>
        )
      case 'notebook':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__book-hero">
              <div className="story-archive__book-cover"><span>MEMORY</span></div>
            </div>
          </div>
        )
      case 'hallway':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__hallway-glow" />
            <div className="story-archive__hallway-figure story-archive__hallway-figure--one" />
            <div className="story-archive__hallway-figure story-archive__hallway-figure--two" />
            <div className="story-archive__light-arc" />
          </div>
        )
      case 'split':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__memory-panel story-archive__memory-panel--left">
              <span>MY MEMORY</span>
            </div>
            <div className="story-archive__memory-panel story-archive__memory-panel--right">
              <span>HIS MEMORY</span>
            </div>
            <div className="story-archive__divider" />
          </div>
        )
      case 'classroom-empty':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__empty-room" />
            <div className="story-archive__empty-desk" />
            <div className="story-archive__empty-chair" />
            <div className="story-archive__empty-book" />
          </div>
        )
      case 'memory-end':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__final-glow" />
            <div className="story-archive__final-book">
              <span>MEMORY</span>
            </div>
          </div>
        )
      case 'instagram':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__sheet" />
            <div className="story-archive__phone story-archive__phone--profile">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen">
                <div className="story-archive__profile-header" />
                <div className="story-archive__profile-avatar" />
                <div className="story-archive__profile-name" />
              </div>
            </div>
          </div>
        )
      case 'comment':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--comment">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--comment">
                <div className="story-archive__caption">this is how obsessed I want my man to be with me</div>
                <div className="story-archive__reply">obsessed with your fancy diary</div>
              </div>
            </div>
            <div className="story-archive__notebook-stigma" />
          </div>
        )
      case 'chat':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__chat bubble-left">hey</div>
            <div className="story-archive__chat bubble-right">hi</div>
            <div className="story-archive__chat bubble-left">you still have that notebook?</div>
            <div className="story-archive__chat bubble-right">haha yes</div>
          </div>
        )
      case 'message':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--message">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--message">
                <div className="story-archive__bubble">Kya hua bacha? Call kru?</div>
              </div>
            </div>
          </div>
        )
      case 'voice':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__voice-card">
              <span>HARYANVI</span>
              <div className="story-archive__waveform">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )
      case 'meeting':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__meeting-glow" />
            <div className="story-archive__person story-archive__person--left" />
            <div className="story-archive__person story-archive__person--right" />
            <div className="story-archive__ice-cream">
              <div className="story-archive__cone" />
              <div className="story-archive__scoop" />
            </div>
          </div>
        )
      case 'care':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__window-panel" />
            <div className="story-archive__table" />
            <div className="story-archive__cup story-archive__cup--one" />
            <div className="story-archive__cup story-archive__cup--two" />
            <div className="story-archive__person story-archive__person--soft story-archive__person--one" />
            <div className="story-archive__person story-archive__person--soft story-archive__person--two" />
          </div>
        )
      case 'phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--call">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--call">
                <span>CALL ACTIVE</span>
                <div className="story-archive__call-line" />
              </div>
            </div>
          </div>
        )
      case 'late-night-room':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__night-window" />
            <div className="story-archive__phone story-archive__phone--bedroom">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--dark" />
            </div>
          </div>
        )
      case 'two-locations':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__connected-node story-archive__connected-node--left" />
            <div className="story-archive__connected-node story-archive__connected-node--right" />
            <div className="story-archive__connection-line" />
          </div>
        )
      case 'bedside-phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__bedside-table" />
            <div className="story-archive__phone story-archive__phone--bedside">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--dark" />
            </div>
          </div>
        )
      case 'desk-routine':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__desk-routine" />
            <div className="story-archive__glow-book" />
            <div className="story-archive__cup-small" />
            <div className="story-archive__earphones" />
          </div>
        )
      case 'study-desks':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__study-desk story-archive__study-desk--left" />
            <div className="story-archive__study-desk story-archive__study-desk--right" />
            <div className="story-archive__lamp story-archive__lamp--left" />
            <div className="story-archive__lamp story-archive__lamp--right" />
          </div>
        )
      case 'motivation':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__books" />
            <div className="story-archive__notes" />
            <div className="story-archive__code-block" />
          </div>
        )
      case 'sunrise':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__sunrise" />
            <div className="story-archive__window-haze" />
            <div className="story-archive__phone-glow" />
          </div>
        )
      case 'notebook-phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__notebook-stack" />
            <div className="story-archive__phone story-archive__phone--small">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--dark" />
            </div>
          </div>
        )
      case 'empty-chat':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__chat-empty" />
            <div className="story-archive__phone story-archive__phone--chat-empty">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--empty" />
            </div>
          </div>
        )
      case 'clock':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__clock" />
            <div className="story-archive__time-face" />
          </div>
        )
      case 'waiting-phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--waiting">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--waiting" />
            </div>
            <div className="story-archive__waiting-mark" />
          </div>
        )
      case 'question-window':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__window-questions" />
            <div className="story-archive__question-mark" />
          </div>
        )
      case 'phone-message':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--message-list">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--list">
                <div className="story-archive__message-line" />
                <div className="story-archive__message-line story-archive__message-line--short" />
              </div>
            </div>
          </div>
        )
      case 'empty-classroom':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__empty-room" />
            <div className="story-archive__chair-empty" />
            <div className="story-archive__desk-empty" />
          </div>
        )
      case 'fading-light':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__fading-dusk" />
            <div className="story-archive__window-sheen" />
          </div>
        )
      case 'unfinished-notebook':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__open-book" />
            <div className="story-archive__corner-note" />
          </div>
        )
      case 'single-phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--single">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--single" />
            </div>
          </div>
        )
      case 'question-screen':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__question-box" />
            <div className="story-archive__question-glow" />
          </div>
        )
      case 'message-split':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__message-panel story-archive__message-panel--left" />
            <div className="story-archive__message-panel story-archive__message-panel--right" />
          </div>
        )
      case 'message-card':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__message-sheet">
              <span>“I’m really sorry, for leaving you clueless.”</span>
            </div>
          </div>
        )
      case 'message-window':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__window-quote" />
            <div className="story-archive__shadow-chair" />
          </div>
        )
      case 'window-chair':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__window-frame" />
            <div className="story-archive__chair-frame" />
          </div>
        )
      case 'tears':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__tear-drop story-archive__tear-drop--one" />
            <div className="story-archive__tear-drop story-archive__tear-drop--two" />
          </div>
        )
      case 'empty-room':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__vacant-room" />
            <div className="story-archive__vacant-chair" />
          </div>
        )
      case 'calendar-question':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__calendar" />
            <div className="story-archive__question-stamp" />
          </div>
        )
      case 'ticket':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__ticket" />
          </div>
        )
      case 'yes-ticket':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__ticket story-archive__ticket--large" />
            <div className="story-archive__stamp">YES</div>
          </div>
        )
      case 'movie-theater':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__theater-screen" />
            <div className="story-archive__seat story-archive__seat--left" />
            <div className="story-archive__seat story-archive__seat--right" />
          </div>
        )
      case 'cinema-seats':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__cinema-lights" />
            <div className="story-archive__seat-row" />
          </div>
        )
      case 'outside-afternoon':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__street-glow" />
            <div className="story-archive__silhouette-walk story-archive__silhouette-walk--left" />
            <div className="story-archive__silhouette-walk story-archive__silhouette-walk--right" />
          </div>
        )
      case 'two-silhouettes':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__walking-silhouette story-archive__walking-silhouette--left" />
            <div className="story-archive__walking-silhouette story-archive__walking-silhouette--right" />
            <div className="story-archive__night-lantern" />
          </div>
        )
      case 'movie-afternoon':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__screen-backdrop" />
            <div className="story-archive__film-strip" />
          </div>
        )
      case 'window-night':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__moon-window" />
            <div className="story-archive__window-sill" />
          </div>
        )
      case 'turned-phone':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--turned">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--turned" />
            </div>
          </div>
        )
      case 'phone-face-down':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__phone story-archive__phone--face-down">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--face-down" />
            </div>
          </div>
        )
      case 'notebook-window':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__window-ledger" />
            <div className="story-archive__notebook-mini" />
          </div>
        )
      case 'night-sky':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__stars" />
            <div className="story-archive__night-haze" />
          </div>
        )
      case 'window-silence':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__silence-window" />
            <div className="story-archive__silence-figure" />
          </div>
        )
      case 'time-clock':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__clock-large" />
            <div className="story-archive__clock-hands" />
          </div>
        )
      case 'quiet-night':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__moon" />
            <div className="story-archive__night-gentle" />
          </div>
        )
      case 'old-notebook':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__book-stack" />
            <div className="story-archive__dust-particle" />
          </div>
        )
      case 'classroom-glow':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__classroom-glow" />
            <div className="story-archive__desk-sheen" />
          </div>
        )
      case 'vintage-book':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__vintage-book" />
            <div className="story-archive__binding" />
          </div>
        )
      case 'phone-and-notebook':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__notebook-mini" />
            <div className="story-archive__phone story-archive__phone--small">
              <div className="story-archive__phone-notch" />
              <div className="story-archive__phone-screen story-archive__phone-screen--dark" />
            </div>
          </div>
        )
      case 'care-memory':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__care-light" />
            <div className="story-archive__person story-archive__person--soft story-archive__person--one" />
          </div>
        )
      case 'door-window':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__hallway-window" />
            <div className="story-archive__door-silhouette" />
          </div>
        )
      case 'memory-table':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__table-surface" />
            <div className="story-archive__memory-book" />
          </div>
        )
      case 'final-page':
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__final-page-book" />
            <div className="story-archive__final-page-text">THE END</div>
          </div>
        )
      default:
        return (
          <div className={baseClass} aria-hidden="true">
            <div className="story-archive__default-visual" />
          </div>
        )
    }
  }

  return (
    <main className="story-archive" aria-label="Story archive">
      <div className="story-archive__background-noise" aria-hidden="true" />

      <aside className="story-archive__sidebar">
        <button type="button" className="story-archive__dashboard" onClick={onBackToDashboard}>
          ← BACK TO DASHBOARD
        </button>

        <div className="story-archive__sidebar-header">
          <p>THE STORY</p>
          <h2>ARCHIVE</h2>
        </div>

        <nav className="story-archive__chapter-list" aria-label="Story chapters">
          {chapters.map((storyChapter, chapterIndex) => (
            <button
              key={storyChapter.id}
              type="button"
              className={`story-archive__chapter-link ${chapterIndex === currentChapter ? 'is-active' : ''}`}
              onClick={() => goToChapter(chapterIndex)}
            >
              <span className="story-archive__chapter-number">{String(chapterIndex + 1).padStart(2, '0')}</span>
              <span className="story-archive__chapter-name">{storyChapter.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <section className={`story-archive__story-shell ${isChapterSix ? 'is-chapter-06' : ''}`} aria-live="polite">
        <header className="story-archive__story-header">
          <p className="story-archive__eyebrow">CHAPTER {String(currentChapter + 1).padStart(2, '0')}</p>
          <h1 className="story-archive__story-heading">{chapter.title}</h1>
        </header>

        <div className={`story-archive__notebook ${isTurning ? 'is-turning' : ''} story-archive__notebook--${turnDirection}`}>
          <div className="story-archive__book-spine" aria-hidden="true" />

          <article className="story-archive__page story-archive__page--left">
            <div className="story-archive__page-meta">
              <span>{String(currentPage + 1).padStart(2, '0')} / {String(chapter.pages.length).padStart(2, '0')}</span>
            </div>

            <div className="story-archive__page-body">
              <h3>{page.title}</h3>
              {page.subtitle && <div className="story-archive__page-divider" aria-hidden="true" />}
              {page.subtitle && <p className="story-archive__page-subtitle">{page.subtitle}</p>}

              {page.paragraphs.map((paragraph, index) => (
                <p key={`${page.id}-${index}`} className="story-archive__story-text">
                  {paragraph}
                </p>
              ))}

              {page.badge && <div className="story-archive__page-badge">{page.badge}</div>}
            </div>
          </article>

          <article className="story-archive__page story-archive__page--right">
            {renderVisual()}
          </article>
        </div>

        {storyEnded ? (
          <div className="story-archive__end-state">
            <p className="story-archive__end-label">THE END</p>
            <button type="button" className="story-archive__nav-button" onClick={onBackToDashboard}>RETURN TO DASHBOARD</button>
            <button type="button" className="story-archive__nav-button" onClick={() => { setStoryEnded(false); setCurrentChapter(0); setCurrentPage(0); }}>REPLAY STORY</button>
          </div>
        ) : (
          <footer className="story-archive__footer-nav" aria-label="Page navigation">
            <button type="button" className="story-archive__nav-button" onClick={previousPage} disabled={currentChapter === 0 && currentPage === 0}>
              ← PREV
            </button>

            <div className="story-archive__pager" aria-label="Page numbers">
              {pageNumbers.map((pageIndex) => (
                <button
                  key={`${chapter.id}-pager-${pageIndex}`}
                  type="button"
                  className={`story-archive__pager-button ${pageIndex === currentPage ? 'is-active' : ''}`}
                  onClick={() => goToPage(pageIndex)}
                  aria-label={`Go to page ${pageIndex + 1}`}
                >
                  {String(pageIndex + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <button type="button" className="story-archive__nav-button" onClick={nextPage}>
              {currentChapter === chapters.length - 1 && currentPage === chapter.pages.length - 1 ? 'END →' : 'NEXT →'}
            </button>
          </footer>
        )}
      </section>
    </main>
  )
}

export default StoryArchive
