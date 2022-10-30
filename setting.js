const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6281271010619',
  atasnama : 'Shuran'
}

// Other
global.owner = ["6281271010619"]
global.premium = ['6281271010619']
global.profilebio = ['6281271010619'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'no sponsors in:('
global.packname = '「𝑺𝒉𝒖𝒓𝒂𝒏𝑩𝑶𝑻𝒁 」'
global.footer = '© 2022 𝙎𝙪𝙧𝙖𝙣𝙩𝙖 𝘼𝙙'
global.author = '「𝑺𝒉𝒖𝒓𝒂𝒏𝑩𝑶𝑻𝒁 」'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "-"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
