//PROJECT START
const projects =[
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
    {"img":"assets/project/example.png", 'title':'Example', 'techstack':'lorem, ipsum, womp, womp'},
]
const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
    const projectCardHTML = `
        <div class="bg-neutral-100 rounded-xl basis-1/4 drop-shadow-xl shadow-current p-0.5 transition-transform ease-out duration-300 hover:scale-110" data-aos="zoom-in-up"   >
            <img src="${project.img}" alt="" class="object-cover w-full  rounded-tr-xl rounded-tl-xl">
            <div class="m-3 space-y-2">
                <div class="text-xl font-bold">${project.title}</div>
                <div class="text-md font-medium">Techstack: <span>${project.techstack}</span></div>
            </div>
        </div>
    `;
    
    projectContainer.innerHTML += projectCardHTML;
});
//PROJECT END

//SKILL START
//LANGUANGE START
const languanges = [
    'assets/icons/php.svg',
    'assets/icons/js.svg',
    'assets/icons/pyhton.svg',
    'assets/icons/java.svg',
]
const languangeContainer = document.getElementById("languange");
languanges.forEach(languange => {
    const languangeIconHTML = `
        <img src=${languange} alt="" class="flex-none w-1/12 transition-transform ease-out duration-300 hover:scale-110 p-3">
    `;
    languangeContainer.innerHTML += languangeIconHTML;
});
//LANGUANGE END
//FRAMEWORK START
const frameworks = [
    'assets/icons/laravel.svg',
    'assets/icons/tailwind.svg',
]
const frameworkContainer = document.getElementById("framework");
frameworks.forEach(framework => {
    const frameworkIconHTML = `
        <img src=${framework} alt="" class="flex-none w-1/12 transition-transform ease-out duration-300 hover:scale-110">
    `;
    frameworkContainer.innerHTML += frameworkIconHTML;
});
//FRAMEWORK END
//DATABASE START
const databases = [
    'assets/icons/mysql.svg',
]
const databaseContainer = document.getElementById("dbms");
databases.forEach(database => {
    const databaseIconHTML = `
        <img src=${database} alt="" class="flex-none w-1/12 transition-transform ease-out duration-300 hover:scale-110">
    `;
    databaseContainer.innerHTML += databaseIconHTML;
});
//DATABASE END
//SKILL END

//DOWNLOAD CV START
function downloadPDF() {
    const pdfUrl = 'assets/portofolio.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'file_name.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
//DOWNLOAD CV END

//AUTO UPDATE VALUE guest_name START
document.getElementById('input_name').addEventListener('input', event => {
    let name = event.target.value;
    const chat_guest_name = document.querySelectorAll('#header_guest_name');
    const guest_name = document.getElementById('guest_name_placeholder')
    
    chat_guest_name.forEach(p => {
        p.textContent = (name !== "" ? `You (${name})` : 'You')
    })

    guest_name.textContent = (name !== "" ? name : '... ');
});
//AUTP UPDATE VALUE guest_name END

//SEND EMAIL START
function sendEmail() {
    let recipientEmail = 'mfarrasashshiddiqi@gmail.com'
    let senderName = document.getElementById('input_name').value;
    let senderEmail = document.getElementById('input_email').value;
    let message = document.getElementById('input_message').value;

    const encodedMessage = encodeURIComponent(message);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=&body=Dear%20${recipientEmail},%0D%0A%0D%0A${encodedMessage}%0D%0A%0D%0A${senderName}%0D%0A%0D%0A${senderEmail}`;

    open(gmailUrl, '_blank');
}
//SEND EMAIL END