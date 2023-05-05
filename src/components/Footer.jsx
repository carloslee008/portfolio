import React from 'react';

import { resume } from '../assets';

const Footer = () => {
    return (
        <footer>
            <div className="bg-neutral-900 text-center text-white">
            <div className="px-6 pt-6">
                <div className="flex-justify-center">
                <a
                href="https://www.linkedin.com/in/carlos-lee-9903a9123"
                className="m-1 h-9 w-10"
                >
                    LinkedIn
                </a>
                <a
                    className="m-1 h-9 w-10"
                    href={resume}
                >
                    Resume
                </a>
                <p className="m-1 h-9">© Carlos Lee</p>
                </div>
            </div>
            </div>
        </footer>
    )
  }

export default Footer;