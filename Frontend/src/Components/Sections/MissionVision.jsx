import React from 'react'
import { resolveImage } from '../../hooks/usePageContent'

const renderDynamicHeading = (text, defaultJsx) => {
    if (!text) return defaultJsx
    const words = text.split(' ')
    if (words.length <= 1) return text
    const lastWord = words.pop()
    return (
        <>
            {words.join(' ')} <span className="text-[#e31e24]">{lastWord}</span>
        </>
    )
}

const MissionVision = ({ section = {}, fallbackImage, imageFirst = true, defaultHeadingJsx }) => {
    const imageSrc = section?.image ? resolveImage(section.image) : fallbackImage
    const heading = section?.heading
    const intro = section?.intro
    const body = section?.body

    const imgClass = 'relative rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-200'

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {imageFirst ? (
                <>
                    <div className={imgClass}>
                        <img src={imageSrc} alt={section?.alt || 'Section image'} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
                            {renderDynamicHeading(heading, defaultHeadingJsx)}
                        </h2>

                        {intro && <p className="text-[18px] font-semibold text-[#2b2b2e] leading-relaxed mb-6">{intro}</p>}

                        <p className="text-[16px] leading-[1.8] text-[#4b5563]">{body}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="order-2 lg:order-1">
                        <h2 className="text-[36px] max-[769px]:text-[28px] font-heading font-extrabold text-[#1c1c1e] mb-4">
                            {renderDynamicHeading(heading, defaultHeadingJsx)}
                        </h2>

                        {intro && <p className="text-[18px] font-semibold text-[#2b2b2e] leading-relaxed mb-6">{intro}</p>}

                        <p className="text-[16px] leading-[1.8] text-[#4b5563]">{body}</p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className={imgClass}>
                            <img src={imageSrc} alt={section?.alt || 'Section image'} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default MissionVision
