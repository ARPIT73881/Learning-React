import React, { useState } from "react";
import Modal from "./Model";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="text-xl">
        Connect with us on{" "}
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.youtube.com/@procodrr"
          target="_blank"
        >
          YouTube
        </a>
      </h1>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={
          <p className="text-2xl  font-bold text-red-500">This is popup</p>
        }
        footer={
          <div className="flex justify-end gap-4">
            <button
              className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam
          assumenda molestiae porro sed pariatur, illo tempora, nostrum omnis
          amet a impedit aspernatur vel fugit accusantium expedita ipsum
          architecto soluta.
        </p>
      </Modal>
    </>
  );
}
