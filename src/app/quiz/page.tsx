'use client';
// =============================================================================
// File Name: Quiz Dynamic Page
// File Description:
// This file contains the code of the Quiz Page and it is a Dynamic page.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/ui/header';
import { PrimaryButton } from '@/ui/foundation/buttons/primary';
import { Option } from '@/ui/foundation/radio/option';
import json from '@/data.json';
import { Subject } from '@/libs/models';
import iconError from '../../../public/icon-error.svg';
import Image from 'next/image';

// =============================================================================
// Page Component
// =============================================================================
export default function QuizPage() {
  const searchParams = useSearchParams();
  const subject: string | null = searchParams.get('subject');

  const data = json.quizzes.find((quiz) => quiz.subject === subject) as Subject;

  const [question, setQuestion] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const options = document?.querySelectorAll(
      'input[type="radio"]'
    ) as NodeListOf<HTMLInputElement>;
    let hasCheckedOption: boolean = false;
    for (const option of options) if (option.checked) hasCheckedOption = true;
    hasCheckedOption ? setHasError(false) : setHasError(true);
    setSubmitted(hasCheckedOption);
  };

  const handleNext = () => {
    const progressBar: HTMLElement | null =
      document?.getElementById('progress-bar');
    progressBar?.classList.remove('w-0');
    if (progressBar) progressBar.style.width = `${question + 1}0%`;
    setQuestion(question + 1);
    setSubmitted(false);
  };

  // TODO Responsiveness
  // TODO Dark mode
  return (
    <main className='max-w-desktop mx-auto flex w-full flex-col gap-10 px-6 py-8 md:gap-16 md:px-16 lg:flex-row lg:px-40 lg:py-20'>
      {/* Quiz menu start */}
      <div className='flex w-full flex-col gap-4'>
        <span className='text-copy italic text-gray-600 dark:text-gray-400 md:text-copy-lg'>
          Question {question + 1} of {data?.questions.length}
        </span>
        <h1 className='w-full max-w-[283px] text-question font-medium md:max-w-[453px] md:text-question-lg'>
          {data?.questions[question].question}
        </h1>
        <div className='h-4 w-full rounded-full bg-white p-1 transition-colors duration-300 ease-in-out dark:bg-gray-800'>
          <div
            id='progress-bar'
            className={`h-2 w-0 rounded-full bg-primary transition-all duration-300 ease-in-out`}
          ></div>
        </div>
      </div>
      <div className='flex w-full flex-col gap-3'>
        <Option
          index={0}
          icon={'A'}
          option={data?.questions[question].options[0]}
          isCorrect={
            data?.questions[question].options[0] ===
            data?.questions[question].answer
          }
          isSubmitted={submitted}
        />
        <Option
          index={1}
          icon={'B'}
          option={data?.questions[question].options[1]}
          isCorrect={
            data?.questions[question].options[1] ===
            data?.questions[question].answer
          }
          isSubmitted={submitted}
        />
        <Option
          index={2}
          icon={'C'}
          option={data?.questions[question].options[2]}
          isCorrect={
            data?.questions[question].options[2] ===
            data?.questions[question].answer
          }
          isSubmitted={submitted}
        />
        <Option
          index={3}
          icon={'D'}
          option={data?.questions[question].options[3]}
          isCorrect={
            data?.questions[question].options[3] ===
            data?.questions[question].answer
          }
          isSubmitted={submitted}
        />
        {submitted ? (
          <PrimaryButton text={'Next question'} handleClick={handleNext} />
        ) : (
          <PrimaryButton text={'Submit answer'} handleClick={handleSubmit} />
        )}
        {hasError && (
          <div className='flex w-full flex-row items-center justify-center gap-2'>
            <Image src={iconError} alt='decoration' className='h-8 w-8' />
            <p className='text-copy-large font-medium text-error md:text-copy-large-lg'>
              Please select an answer
            </p>
          </div>
        )}
      </div>
      {/* Quiz menu end */}
    </main>
  );
}
