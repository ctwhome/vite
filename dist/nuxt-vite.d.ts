import { InlineConfig, SSROptions } from 'vite';
import { VueViteOptions } from 'vite-plugin-vue2';

interface ViteOptions extends InlineConfig {
    /**
     * Options for vite-plugin-vue2
     *
     * @link https://github.com/underfin/vite-plugin-vue2
     */
    vue?: VueViteOptions;
    ssr?: SSROptions;
}

declare function nuxtVite(): void;
declare namespace nuxtVite {
    var meta: {
        name: string;
        version: string;
    };
}

declare module '@nuxt/types/config/index' {
    interface NuxtOptions {
        /**
         * Configuration for Vite.
         * Severe the same functionality as Vite's `vite.config.ts`.
         * It will merges with Nuxt specify configurations and plugins.
         *
         * @link https://vitejs.dev/config/
         */
        vite?: ViteOptions & {
            ssr: false | ViteOptions['ssr'];
            experimentWarning: boolean;
        };
    }
}

export { nuxtVite as default };
