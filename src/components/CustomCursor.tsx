import { AnimatePresence, motion, MotionValue, useMotionValue } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { cnBase } from 'tailwind-variants'

export interface PointerProps {
  children: React.ReactNode
  className?: string
  name: string
}

export const Pointer: React.FC<PointerProps> = ({
  children,
  className,
  name
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  return (
    <div
      onMouseLeave={() => setIsInside(false)}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
          const scrollX = window.scrollX
          const scrollY = window.scrollY
          x.set(e.clientX - rect.left + scrollX)
          y.set(e.clientY - rect.top + scrollY)
        }
      }}
      style={{
        cursor: 'none'
      }}
      ref={ref}
      className={cnBase('relative', className)}>
      <AnimatePresence>{isInside && <FollowPointer x={x} y={y} name={name} />}</AnimatePresence>
      {children}
    </div>
  )
}

export interface FollowPointerProps {
  name: string
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const FollowPointer: React.FC<FollowPointerProps> = ({ x, y, name }) => {
  return (
    <>
      <motion.div
        className="absolute z-50 h-4 w-4 rounded-full"
        style={{
          top: y,
          left: x,
          pointerEvents: 'none'
        }}
        initial={{
          scale: 1,
          opacity: 1
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        exit={{
          scale: 0,
          opacity: 0
        }}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <div className="w-fit rounded-full bg-sky-500 px-2 py-1 text-white">{name || '2CGPA'}</div>
      </motion.div>
    </>
  )
}

export interface AnimatedCursorProps {
  className?: string;
  text: string
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({ className, text }) => (
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ translateX: ['0', '20px', '0'], translateY: ['0', '40px', '0'] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className={'relative z-[2] flex items-center gap-4'}>
    <div
      className={cnBase(
        'w-fit rounded-full border border-red-500 bg-red-500 px-2 py-1 text-white',
        className
      )}>
      {text}
    </div>
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill="#f31260"
        stroke="#f31260"
        strokeWidth="1.5"
      />
    </svg>
  </motion.div>
) 