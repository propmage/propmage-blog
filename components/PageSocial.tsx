import * as React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.homepage && {
    name: 'homepage',
    href: `https://${config.homepage}`,
    title: `Homepage: ${config.twitter}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" version="1.1" viewBox="0 0 600 1100" fill="#5f5d58">
        <path d="M426.79 608.99c156.92,-21.85 223.02,-215.32 109.9,-328.47 -121.54,-121.51 -330.29,-35.1 -330.33,136.83l-0.03 102.68c0,3.23 -1.16,6.01 -3.44,8.29 -2.29,2.29 -5.08,3.42 -8.31,3.41 -49.88,-0.28 -109.78,22.62 -148.74,50.17 -7.26,5.14 -16.19,5.78 -24.11,1.69 -7.92,-4.08 -12.57,-11.71 -12.61,-20.61l-0.51 -145.63c-0.36,-215.41 174.98,-391.24 391.26,-391.24 347.34,0 522.54,421.98 276.63,667.88 -69.52,69.53 -165.07,113.01 -270.77,114.57 -41.37,0.56 -82.73,-0.39 -124.1,-0.42 -41.41,-0.05 -75.2,33.72 -75.22,75.12l-0.08 190.64 -196.99 0c0.05,-89.48 -0.4,-180.34 -0.4,-269.06 0,-106.76 87.12,-193.88 193.89,-193.8 73.14,0.06 151.11,8.09 223.96,-2.05z"/>
      </svg>
    ),
  },
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.facebook && {
    name: 'facebook',
    href: `https://facebook.com/${config.facebook}`,
    title: `Facebook ${config.author}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
      </svg>
    )
  }




].filter(Boolean)

export const PageSocial: React.FC = () => {
  console.log(socialLinks);
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
