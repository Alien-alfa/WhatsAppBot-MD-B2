let handler = m => m
handler.before = async function (m, { msgsz, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|INVITING)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    msgsz.fakeReply(m.quoted.mentionedJid[0], `*Owner:* ` + m.text, m.quoted.mentionedJid[0], `${m.quoted.text.split`Message :`[1]}`)
}
module.exports = handler
