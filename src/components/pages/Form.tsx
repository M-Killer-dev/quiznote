"use client";

import { useState } from "react";
import FormContainer from "../shared/FormContainer";
import TabComponent from "../shared/TabComponent";
import FileNote from "./FileNote";
import TextNote from "./TextNote";

export default function Form() {
  const [step, setStep] = useState(0);

  return (
    <FormContainer>
      <form action="#">
        <header className="text-center mb-10">
          <h2 className="text-lg font-semibold mb-1">Add Notes</h2>
          <p className="text-xs text-zinc-400">
            Paste your notes as text or upload a file
          </p>
        </header>

        <div className="flex flex-col gap-3 mb-4">
          <TabComponent step={step} onSetStep={setStep}>
            {step === 0 ? <TextNote /> : <FileNote />}
          </TabComponent>
        </div>

        <fieldset className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-8 mb-10">
          <label htmlFor="difficulty">
            <p className="text-sm mb-2 text-zinc-500">
              Select difficulty level
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="difficulty"
              id="difficulty"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label htmlFor="quiz-count">
            <p className="text-sm mb-2 text-zinc-500">
              How many quizzes do you want to generate?
            </p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="quiz-count"
              id="quiz-count"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>

          <label htmlFor="timer">
            <p className="text-sm mb-2 text-zinc-500">Completion Time</p>

            <select
              className="font-geistmono block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs text-sm"
              name="timer"
              id="timer"
            >
              <option value="5">5 min</option>
              <option value="10">10 min </option>
              <option value="15">15 min</option>
            </select>
          </label>
        </fieldset>

        <button className="flex items-center justify-center w-full text-center max-w-lg mx-auto duration-200 text-sm gap-x-2 bg-primary hover:bg-secondary text-white font-medium px-4 py-3 rounded-full">
          Generate Quiz
        </button>
      </form>
    </FormContainer>
  );
}