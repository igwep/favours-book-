// components/ScribdEmbed.tsx
import React from "react";

const ScribdEmbed: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex flex-col">
      <iframe
        className="scribd_iframe_embed w-full h-full"
        title="Original Copy Broken-dreams"
        src="https://www.scribd.com/embeds/825683667/content?start_page=1&view_mode=scroll&access_key=key-miN3m9WlH5B9qfbjFq6v"
        tabIndex={0}
        data-auto-height="true"
        data-aspect-ratio="0.7729220222793488"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <p className="text-sm text-green-400 text-center py-2 bg-gray-900">
        <a
          title="View Original Copy Broken-dreams on Scribd"
          href="https://www.scribd.com/document/825683667/Original-Copy-Broken-dreams#from_embed"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Original Copy Broken-dreams
        </a>{" "}
        by{" "}
        <a
          title="View mohdaysha007's profile on Scribd"
          href="https://www.scribd.com/user/830128733/mohdaysha007#from_embed"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          mohdaysha007
        </a>
      </p>
    </div>
  );
};

export default ScribdEmbed;
