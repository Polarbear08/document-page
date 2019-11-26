/*download button action*/
function downloadZip() {
    const filename = 'apache_node_doc.zip'
    const pathname = '../static/apache_node_doc.zip'
    const anchor = document.createElement('a')
    anchor.href = pathname
    anchor.download = filename
}

const downloadBtn = document.getElementById('dl-button')
downloadBtn.addEventListener('click', downloadZip, false)
