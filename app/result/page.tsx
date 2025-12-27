'use client'

import { useEffect, useRef, useState } from 'react'
import SiteHeader from '@/components/SiteHeader'
import Image from 'next/image'
import Link from 'next/link'

export default function ResultPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const imageInput = imageInputRef.current
    const cameraIcon = document.querySelector('img[alt="Camera Icon"]')
    const galleryIcon = document.querySelector('img[alt="Photo Upload Icon"]')
    const previewDiv = document.querySelector('.preview-image-box')
    const proceedLink = document.getElementById('proceed-link')

    const handleImageUpload = (file: File) => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setImagePreview(result)
          if (previewDiv) {
            ;(previewDiv as HTMLElement).style.backgroundImage = `url(${result})`
            ;(previewDiv as HTMLElement).style.backgroundSize = 'cover'
            ;(previewDiv as HTMLElement).style.backgroundPosition = 'center'
          }
          if (proceedLink) {
            proceedLink.classList.remove('hidden')
          }
        }
        reader.readAsDataURL(file)
      }
    }

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (target.files && target.files[0]) {
        handleImageUpload(target.files[0])
      }
    }

    const handleCameraClick = () => {
      imageInput?.click()
    }

    const handleGalleryClick = () => {
      imageInput?.click()
    }

    if (imageInput) {
      imageInput.addEventListener('change', handleFileChange)
    }

    if (cameraIcon) {
      cameraIcon.addEventListener('click', handleCameraClick)
    }

    if (galleryIcon) {
      galleryIcon.addEventListener('click', handleGalleryClick)
    }

    return () => {
      if (imageInput) {
        imageInput.removeEventListener('change', handleFileChange)
      }
      if (cameraIcon) {
        cameraIcon.removeEventListener('click', handleCameraClick)
      }
      if (galleryIcon) {
        galleryIcon.removeEventListener('click', handleGalleryClick)
      }
    }
  }, [])

  return (
    <>
      <SiteHeader section="INTRO" />
      <div style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        position: 'relative',
        paddingTop: '64px',
        justifyContent: 'center'
      }} className="md:pt-[64px]">
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '36px'
        }} className="absolute top-2 left-9 md:left-8 text-left">
          <p style={{
            fontWeight: 600,
            fontSize: '12px'
          }} className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
        </div>
        <div style={{
          flex: '0.4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 0,
          gap: '-20px'
        }} className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
          {/* Left section - Camera */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }} className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
            <div style={{
              width: '270px',
              height: '270px'
            }} className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
            <Image
              alt="Diamond Large"
              width={482}
              height={482}
              className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-200"
              style={{ color: 'transparent' }}
              src="/ResDiamond-large.png"
            />
            <Image
              alt="DiamondMedium"
              width={444}
              height={444}
              className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190"
              style={{ color: 'transparent' }}
              src="/ResDiamond-medium.png"
            />
            <Image
              alt="DiamondSmall"
              width={405}
              height={405}
              className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              style={{ color: 'transparent' }}
              src="/ResDiamond-small.png"
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }} className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                alt="Camera Icon"
                width={136}
                height={136}
                className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
                style={{ color: 'transparent' }}
                src="/camera-icon.png"
              />
              <div style={{
                position: 'absolute',
                bottom: '1%',
                right: '90px'
              }} className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
                <p style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  marginTop: '4px',
                  lineHeight: '24px'
                }} className="text-xs md:text-sm font-normal mt-1 leading-[24px]">ALLOW A.I.<br/>TO SCAN YOUR FACE</p>
                <Image
                  alt="Scan Line"
                  width={66}
                  height={59}
                  className="absolute hidden md:block md:right-[143px] md:top-[20px]"
                  style={{ color: 'transparent' }}
                  src="/ResScanLine.png"
                />
              </div>
            </div>
          </div>
          {/* Right section - Gallery */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '48px',
            justifyContent: 'center'
          }} className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
            <div style={{
              width: '270px',
              height: '270px'
            }} className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
            <Image
              alt="Diamond Large"
              width={484}
              height={484}
              className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-205"
              style={{ color: 'transparent' }}
              src="/ResDiamond-large.png"
            />
            <Image
              alt="DiamondMedium"
              width={448}
              height={448}
              className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195"
              style={{ color: 'transparent' }}
              src="/ResDiamond-medium.png"
            />
            <Image
              alt="DiamondSmall"
              width={408}
              height={408}
              className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              style={{ color: 'transparent' }}
              src="/ResDiamond-small.png"
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }} className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                alt="Photo Upload Icon"
                width={136}
                height={136}
                className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
                style={{ color: 'transparent' }}
                src="/gallery-icon.png"
              />
              <div style={{
                position: 'absolute',
                top: '75%'
              }} className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
                <p style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  marginTop: '8px',
                  lineHeight: '24px',
                  textAlign: 'right'
                }} className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">ALLOW A.I.<br/>ACCESS GALLERY</p>
                <Image
                  alt="Gallery Line"
                  width={66}
                  height={59}
                  className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
                  style={{ color: 'transparent' }}
                  src="/ResGalleryLine.png"
                />
              </div>
            </div>
          </div>
          {/* Preview box */}
          <div style={{
            position: 'absolute',
            top: '-75px',
            right: '28px'
          }} className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8 transition-opacity duration-300 opacity-100">
            <h1 style={{
              fontSize: '12px',
              fontWeight: 400,
              marginBottom: '4px'
            }} className="text-xs md:text-sm font-normal mb-1">Preview</h1>
            <div style={{
              width: '96px',
              height: '96px',
              border: '1px solid #d1d5db',
              overflow: 'hidden'
            }} className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden preview-image-box"></div>
          </div>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            id="image-input"
          />
        </div>
        <div style={{
          paddingTop: '16px',
          paddingBottom: '32px',
          backgroundColor: 'white',
          position: 'sticky',
          bottom: '122px',
          marginBottom: 0
        }} className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0">
          <div style={{
            position: 'absolute',
            bottom: '32px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '52px',
            paddingRight: '52px'
          }} className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
            <Link className="relative" aria-label="Back" href="/testing">
              <div>
                <div style={{
                  position: 'relative',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #1A1B1C',
                  transform: 'rotate(45deg) scale(1)'
                }} className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span style={{
                    transform: 'rotate(-45deg)',
                    fontSize: '12px',
                    fontWeight: 600
                  }} className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'none',
                    justifyContent: 'center',
                    border: '1px solid #1A1B1C',
                    transform: 'rotate(45deg) scale(0.85)'
                  }} className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span style={{
                    position: 'absolute',
                    left: '15px',
                    bottom: '13px',
                    transform: 'scale(0.9) rotate(180deg)',
                    display: 'none'
                  }} className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'none',
                    marginLeft: '24px'
                  }} className="text-sm font-semibold hidden sm:block ml-6">BACK</span>
                </div>
              </div>
            </Link>
            <Link href="/select" id="proceed-link" className="hidden">
              <div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #1A1B1C',
                  transform: 'rotate(45deg) scale(1)'
                }} className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span style={{
                    transform: 'rotate(-45deg)',
                    fontSize: '12px',
                    fontWeight: 600
                  }} className="rotate-[-45deg] text-xs font-semibold sm:hidden">PROCEED</span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'none',
                    marginRight: '20px'
                  }} className="text-sm font-semibold hidden sm:block mr-5">PROCEED</span>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'none',
                    justifyContent: 'center',
                    border: '1px solid #1A1B1C',
                    transform: 'rotate(45deg) scale(0.85)'
                  }} className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span style={{
                    position: 'absolute',
                    right: '15px',
                    bottom: '13px',
                    transform: 'scale(0.9)',
                    display: 'none'
                  }} className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}