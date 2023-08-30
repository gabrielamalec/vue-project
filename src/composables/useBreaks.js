import { useBreakpoints } from '@vueuse/core'

export function useBreaks() {

    const breakpoints = useBreakpoints({
            mobile: 720,
            tablet: 1200,
        })

        const mobile = breakpoints.smallerOrEqual('mobile');
        // const tablet = breakpoints.between('mobile', 'desktop');
        const desktop = breakpoints.greaterOrEqual('tablet');

        return { mobile, desktop }
}