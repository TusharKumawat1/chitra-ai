"use client"
import CountUp from 'react-countup';

export const CountIncreaseEffect = ({ text, duration }: { text: number, duration: number }) => {
  return (
    <CountUp end={text} duration={duration} enableScrollSpy scrollSpyOnce startOnMount />
  )
}

