const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/se", (req, res) => {
	let transporter = nodemailer.createTransport({
		service : "gmail",
		auth : {
			user : "archie.tester.26sep23@gmail.com",
			pass : "lthdnayexkmkkbeh"
		}
	});

	let mailOptions = {
		from : "archie.tester.26sep23@gmail.com",
		to : "classeskamalsir@gmail.com",
		subject : "Enquiry from " + req.body.name,
		text : " phone = " + req.body.phone + " query " + req.body.query
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if (err)
			res.status(500).json({"message" : "server error"});
		else
			res.status(200).json({"message" : "email sent"});
	})
	
});

app.listen(9000, () => { console.log("ready to serve @ 9000 "); });








