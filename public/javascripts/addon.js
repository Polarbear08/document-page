/*download button action*/
function downloadZip() {
    const filename = 'downloaded_file.zip'
    const pathname = '/zip/original_file.zip'
    const anchor = document.createElement('a')
    anchor.href = pathname
    anchor.download = filename
    anchor.click()
}

const downloadBtn = document.getElementById('dl-button')
downloadBtn.addEventListener('click', downloadZip, false)
