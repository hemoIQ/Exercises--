import React, { useEffect, useState } from 'react';
import { checkOnGithub } from '../utils/github';
import { Download } from 'lucide-react';
import packageJson from '../../package.json';

const UpdateChecker = () => {
    const [updateAvailable, setUpdateAvailable] = useState(null);

    useEffect(() => {
        checkOnGithub(packageJson.version).then(update => {
            if (update) {
                setUpdateAvailable(update);
            }
        });
    }, []);

    if (!updateAvailable) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-zinc-900 border border-green-500/20 p-4 rounded-xl shadow-2xl z-50 flex items-center justify-between animate-in slide-in-from-bottom duration-500">
            <div className="flex flex-col">
                <span className="text-green-400 font-bold text-sm">تحديث جديد متوفر!</span>
                <span className="text-zinc-400 text-xs">إصدار {updateAvailable.version} جاهز للتحميل</span>
            </div>
            <a
                href={updateAvailable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-green-500 transition-colors"
            >
                <Download className="w-4 h-4" />
                تحديث
            </a>
        </div>
    );
};

export default UpdateChecker;
