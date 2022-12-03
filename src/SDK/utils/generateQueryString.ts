function generateQueryString (
    params: {[key: string]: string | number | undefined | string[] | boolean}
): string {

    const convertedParams: {[key: string]: string} = {}

    Object
    .keys(params)
    .forEach(key =>{
        const param = params[key]

    if(param)
    convertedParams[key] = String(param)
    })

    const urlParams = new URLSearchParams(convertedParams)

    return `?${urlParams.toString()}`
}

export default generateQueryString