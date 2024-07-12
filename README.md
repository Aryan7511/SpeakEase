<h1 align="center">SpeakEase</h1>


SpeakEase is an advanced platform that enables real-time voice recognition and translation. This README provides information on how the platform works and how to run it in your development environment.

## 🌐 Deployment

⭐️ **SpeakEase is deployed and can be accessed at the following link: [SpeakEase Deployment](https://speak-ease-lac.vercel.app/)**

## <a name="tech-stack">⚙️ Tech Stack</a>
SpeakEase is built using the following technologies:

[![Stack Used](https://skillicons.dev/icons?i=nextjs,typescript,html,tailwind,nodejs,npm)](https://skillicons.dev)

## <a name="features">🔋 **Features**</a>

- **Speech Recognition**: Converts spoken words into text using the Web Speech API.

- **Text Translation**: Translates the recognized text into a selected target language using the Gemini-1.5-Flash model.

- **Audio Playback**: Converts translated text back into speech using the Web Speech API's speech synthesis.

- **File Upload**: Reads and translates text from uploaded files, including RTF to plain text conversion.

- **Language Selection**: Allows users to select target languages for translation.

- **Copy to Clipboard**: Copies the translated text to the clipboard.

- **Like, Dislike, and Favorite**: Provides user interaction features for translations.

- **Responsive Design**: Ensures a seamless experience across different devices.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Aryan7511/SpeakEase.git
cd SpeakEase
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
```

Replace your-gemini-api-key with your actual Gemini API key credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
