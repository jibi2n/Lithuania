// Generates public/audio/<slug>.mp3 for each phrase with Azure's Lithuanian neural voice.
// Run once: AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=... npm run audio
import { mkdir, writeFile } from 'node:fs/promises';
import { phrases } from '../src/data/content.ts';

const key = process.env.AZURE_SPEECH_KEY;
const region = process.env.AZURE_SPEECH_REGION;
if (!key || !region) throw new Error('Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION');

const voice = process.env.AZURE_SPEECH_VOICE ?? 'lt-LT-OnaNeural';
await mkdir('public/audio', { recursive: true });

for (const p of phrases) {
  // Slightly slower than normal so kids can follow along.
  const ssml = `<speak version="1.0" xml:lang="lt-LT"><voice name="${voice}"><prosody rate="-15%">${p.speak}</prosody></voice></speak>`;
  const res = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
      'User-Agent': 'labas-lithuania',
    },
    body: ssml,
  });
  if (!res.ok) throw new Error(`${p.audio}: ${res.status} ${await res.text()}`);
  await writeFile(`public/audio/${p.audio}.mp3`, Buffer.from(await res.arrayBuffer()));
  console.log(`public/audio/${p.audio}.mp3`);
}
