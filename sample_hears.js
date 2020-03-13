/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async(message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });
    
    
    
    
    // ทดสอบข้อคำถามงานทะเบียน-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    controller.hears(['วันสุดท้ายในการชำระเงินค่าเทอม ในใบพิมพ์ชำระเงินระบุไม่ตรงกับวันที่ระบุในปฎิทินการศึกษา', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'นักศึกษาถ้าจะจ่ายเงินวันไหนก็พิมพ์ใบชำระเงินไปจ่ายวันนั้นเพราะใบชำระเงินต้องพิมพ์วันต่อวัน' });
    });

    controller.hears(['ไม่ได้ลงทะเบียนภายในระยะเวลาที่กำหนดไว้ในปฏิทินการศึกษา ต้องทำอย่างไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ให้นักศึกษามาดำเนินการลาพักการศึกษา ภายในระยะเวลาที่กำหนดไว้ในปฏิทินการศึกษา ที่สำนักทะเบียนฯ ช่อง 3 มิฉะนั้นจะพ้นสถานะภาพนักศึกษาวัน' });
    });

    controller.hears(['ทำไมชำระเงินค่าเทอมไม่ตัดสักที', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'อยู่ในระหว่างการตรวจสอบข้อมูล โปรดรอ 2-3 วัน นับจากวันที่ชำระเงิน' });
    });

    controller.hears(['กรณีชำระเงินค่าเทอม หากไม่สะดวกนำใบเสร็จที่จ่ายผ่านเคาน์เตอร์ธนาคารไปเคลียร์ยอดที่สำนักทะเบียน สามารถทำอย่างไรได้บ้าง', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถเคลียร์ยอดชำระได้ที่กองคลังชั้น 3 สำนักงานอธิการบดี อาคารกรมหลวงนราธิวาสราชนครินทร์เพื่อขอรับใบเสร็จตัวจริง หากไม่สะดวกดำเนินการ ต้องรอประมาณ 2 วัน นับจากวันที่ชำระเงิน เพื่อที่ธนาคารจะส่งรายงานการชำระเงินให้กับกองคลังเพื่อเคลียร์ยอดออกจากระบบและออกเลขที่ใบเสร็จ (ไม่ต้องมาเคลียร์ยอดที่สำนักทะเบียน)' });
    });

    controller.hears(['วันสุดท้ายในการชำระเงินค่าเทอม ในใบพิมพ์ชำระเงินระบุไม่ตรงกับวันที่ระบุในปฎิทินการศึกษา ', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'นักศึกษาถ้าจะจ่ายเงินวันไหนก็พิมพ์ใบชำระเงินไปจ่ายวันนั้นเพราะใบชำระเงินต้องพิมพ์วันต่อวัน' });
    });

    controller.hears(['ยังไม่ได้ชำระเงินค่าเทอม และเลยระยะเวลาชำระเงินวันสุดท้าย ต้องทำอย่างไร','ยังไม่ได้ชำระค่าเทอม','ยังไม่ได้จ่ายค่าเทอม','จ่ายค่าเทอมช้า', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ให้ยื่นคำร้องขอชำระเงินล่าช้าที่งานทะเบียนคณะที่นักศึกษาสังกัด และเข้าสอบกลางภาคตามปกติ' });
    });

    controller.hears(['ลืมประเมินอาจารย์ ควรทำอย่างไร','ลืมประเมินอาจารย์', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'นักศึกษาจะไม่ทราบผลการเรียนทุกรายวิชาในภาคเรียนนั้น เว้นแต่จะทราบคะแนนเฉลี่ยประจำภาค (GPS) คะแนนเฉลี่ยสะสม (GPA) และรายวิชาที่ได้เกรด F เท่านั้นจนกว่านักศึกษาจะประเมินการสอนครั้งต่อไป หากนักศึกษาต้องการทราบผลจะต้องมายื่นคำร้องขอ Transcript พร้อมชำระเงินค่าเอกสาร 50 บาท' });
    });

    controller.hears(['ลงวิชาภาคไปตอนลงทะเบียนล่วงหน้า แต่ลงผิดกลุ่ม ต้องทำอย่างไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถเปลี่ยนกลุ่มได้ตอนลงทะเบียนจริง หรือจะเปลี่ยนกลุ่มตอนเพิ่ม-เปลี่ยน ก็ได้' });
    });

    controller.hears(['วิชาเลือกเสรีลงได้กี่ตัว','ลงวิชาเลือกเสรี', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ต้องดูที่หลักสูตรของแต่ละสาขาว่ากำหนดให้ลงวิชาเลือกเสรีกี่ตัว โดยสามารถลงเกินกว่าที่หลักสูตรกำหนดไว้ได้' });
    });

    controller.hears(['วิชาเลือกเสรีลงได้กี่หน่วยกิต', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ต้องดูที่หลักสูตรของแต่ละสาขาว่ากำหนดให้ลงวิชาเลือกเสรีกี่หน่วยกิต โดยสามารถลงเกินกว่าที่หลักสูตรกำหนดไว้ได้' });
    });

    controller.hears(['วิชาเลือกเสรีลงได้กี่หน่วยกิต', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ต้องดูที่หลักสูตรของแต่ละสาขาว่ากำหนดให้ลงวิชาเลือกเสรีกี่หน่วยกิต โดยสามารถลงเกินกว่าที่หลักสูตรกำหนดไว้ได้' });
    });

    // ทดสอบข้อคำถามงานงานทุน-----------------------------------------------------------------------------------------------------------------------------------------------------
    controller.hears(['กรอกข้อมูลทุนของกองทุนการศึกษา สจล.ในระบบสารสนเทศแล้วต้องยื่นใบสมัครขอรับทุนที่ไหน', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ยื่นใบสมัครขอรับทุนที่ส่วนกิจการนักศึกษาของคณะ' });
    });

    controller.hears(['ทุนประเภทต่อเนื่องจนสำเร็จการศึกษา จะได้รับการยกเว้นค่าธรรมเนียมการศึกษาเมื่อไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'จะได้รับการยกเว้นค่าธรรมเนียมการศึกษาในปีการศึกษาถัดไป' });
    });

    controller.hears(['ถ้าชำระค่าธรรมเนียมการศึกษาไปก่อนแล้ว กยศ.จะจ่ายกลับคืนมาวันไหน', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: '1.กยศ.จะจ่ายกลับมาภายในประมาณ 30 วัน หลังจากธนาคารทำการโอนเงินให้กับสถาบันฯแล้ว นักศึกษาไม่ต้องยื่นเอกสารใดๆ ธนาคารที่เปิดร่วมกับบัตรนักศึกษาจะทำการโอนเงินเข้าในบัญชีของนักศึกษา สามารถตรวจสอบการโอนเงินได้ที่ https://www.studentloan.or.th/ \n2. หากเกินกำหนดการ 30 วันแล้วสามารถติดต่อด้วยตนเองที่ส่วนการคลังชั้น 3  อาคารกรมหลวงนราธิวาสราชนครินทร์ \n3.สามารถสอบถามข้อมูลได้ที่สำนักทะเบียนฯ ชั้น 2 ช่องที่ 5 อาคารกรมหลวงนราธิวาสราชนครินทร์   หรือเบอร์โทร    02-329-8202 ' });
    });

    controller.hears(['ผู้กู้รายเก่าของสจล.จะต้องมีผู้เซ็นเอกสารรับรองรายได้ของบิดามารดาไหม ', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'จำเป็นต้องมี  และกยศ.ตรวจสอบคุณสมบัติผู้กู้ทุกปีการศึกษา เฉพาะภาคเรียนที่ 1' });
    });

    controller.hears(['ผู้สัมภาษณ์กยศ. ต้องการเอกสารเพิ่มเติมในขณะที่สัมภาษณ์อยู่ หากผู้ถูกสัมภาษณ์ส่งเอกสารที่ต้องการเพิ่มเติมล่าช้าจะมีผลอย่างไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'มีเวลา 1 เดือนสำหรับการเตรียมเอกสาร หากเอกสารไม่ถูกต้องและไม่ครบถ้วน ก็ไม่สามารถให้สิทธิ์กู้ยืมได้ ช่องทางการส่งเอกสารสามารถส่งทางไปรษณีย์จ่าถึงผู้รับเป็นสำนักทะเบียนและประมวลผล-[กยศ.]- สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่1 ถนนฉลองกรุง เขตลาดกระบัง กทม.10520  แบบลงทะเบียนหรือแบบ EMS ก็ได้' });
    });

    controller.hears(['นักศึกษาที่ได้รับทุนการศึกษาต่อเนื่อง เคยกู้กยศ.แล้วไม่ได้ทำเรื่องกู้กยศ.ต่อต้องทำการยกเลิกการกู้กยศ.ไหม', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ผู้กู้ไม่ต้องทำการยกเลิก แต่ต้องจัดทำแบบรายงานสถานภาพ ตามแบบกยศ.204 ทุกปีการศึกษา มิฉะนั้น ทางธนาคารจะให้ชำระหนี้คืนกองทุน หากมีข้อสงสัยติดต่อได้ที่สำนักทะเบียนฯ ชั้น 2 ช่องที่ 5 อาคารกรมหลวงนราธิวาสราชนครินทร์' });
    });

    controller.hears(['ทุนประเภทต่อเนื่องจนสำเร็จการศึกษา จะได้รับค่าใช้จ่ายส่วนตัวเมื่อไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'จะได้รับครั้งแรกหลังเปิดภาคเรียนในปีการศึกษาที่ได้รับทุน และครั้งต่อไปทุกปีการศึกษาหลังมีผลการศึกษารายวิชาครบถ้วนแล้วประมาณ 1 เดือน' });
    });

        
// ทดสอบข้อคำถามที่พบบ่อย-----------------------------------------------------------------------------------------------------------------------------------------------------

    controller.hears(['บัตรนักศึกษาจะได้รับภายในกี่วัน', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ประมาณ 3-4 สัปดาห์ นับจากวันที่ไปติดต่อ ธนาคารจะเป็นผู้นัดวันรับ' });
    });

    controller.hears(['ประกาศรับสมัครนักศึกษาใหม่เมื่อไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ประมาณเดือนกันยายน-ตุลาคม ให้ติดตามทาง www.reg.kmitl.ac.th หรือโทรสอบถามที่ 02-329-8000 ถึง 10 ต่อ 3202-3203,3205' });
    });

    controller.hears(['ไม่มีรายชื่อในใบเช็คชื่อของอาจารย์ผู้สอน ต้องทำอย่างไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ให้นักศึกษาตรวจสอบข้อมูลตารางเรียนส่วนบุคคล ว่าได้ลงทะเบียนรายวิชาและกลุ่มเรียนถูกต้องหรือไม่ หรือติดต่อด่วนที่สำนักทะเบียนฯ  ชั้น 2 ช่อง 3 อาคารกรมหลวงนราธิวาสราชนครินทร์' });
    });

    controller.hears(['ถ้าทำบัตรนักศึกษาหาย ควรทำอย่างไร', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'ในกรณีบัตรนักศึกษาหาย ให้นักศึกษาทำตามขั้นตอนดังต่อไปนี้ :\n1. ทำการอายัติบัตรกับเจ้าหน้าที่ธนาคาร\n2. ติดต่อสำนักทะเบียนฯ  อาคารกรมหลวงนราธิวาสราชนครินทร์ชั้น 2 เพื่อยื่นเรื่องทำบัตรใหม่ เจ้าหน้าที่จะให้หนังสือยื่นทำบัตรใหม่ โดยมีค่าธรรมเนียม 200 บาท \n3. นำหนังสือที่ได้ติดต่อธนาคารที่เปิดบัญชีร่วมกับบัตรนักศึกษาไว้'});
    });

    controller.hears(['บัตรนักศึกษาจะได้รับภายในกี่วัน', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถขอทรานสคริปต์ได้ที่สำนักทะเบียนฯ ตึกอธิการ ชั้น 2 โดยมีค่าธรรมเนียม 50 บาทต่อทรานสคริปต์หนึ่งใบ'});
    });

    controller.hears(['ขอใบเสร็จชำระเงินค่าเทอมได้ที่ไหน', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถติดต่อขอรับใบเสร็จชำระเงินค่าเทอมได้ที่ ส่วนงานการคลัง ตึกอธิการฯ ชั้น 3'});
    });

    controller.hears(['เชื่อมต่อ Wi-Fi สถาบันไม่ได้', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถติดต่อหรือแจ้งปัญหาการใช้งาน อินเทอร์เน็ตได้ที่ สำนักบริการคอมพิวเตอร์ ชั้น 1 ห้อง 136   หรือ  ติดต่อผ่านช่องทางการสื่อสารดังต่อไปนี้ :\nLine ID : @helpcenter.kmitl\nEmail : helpcenter@kmitl.ac. Th\nMobile : 091-190-6000\nโทรศัพท์ : 02-329-8000 ต่อ 6000'});
    });

    controller.hears(['เข้าใช้งาน account สถาบันไม่ได้', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'สามารถติดต่อหรือแจ้งปัญหาการใช้งาน อินเทอร์เน็ตได้ที่ สำนักบริการคอมพิวเตอร์ ชั้น 1 ห้อง 136   หรือ  ติดต่อผ่านช่องทางการสื่อสารดังต่อไปนี้ :\nLine ID : @helpcenter.kmitl\nEmail : helpcenter@kmitl.ac. Th\nMobile : 091-190-6000\nโทรศัพท์ : 02-329-8000 ต่อ 6000'});
    });

    
}