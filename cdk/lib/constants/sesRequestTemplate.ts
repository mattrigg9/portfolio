const FROM_ADDRESS = "noreply@mattrigg.dev";
const TO_ADDRESS = "matt@mattrigg.dev";

export const jsonRequestTemplate = [
  "Action=SendEmail",
  `Message.Body.Text.Data=$util.urlEncode("\n
New Portfolio Contact Form Submission\n
Name: $input.json('$.name')\r
Email: $input.json('$.email') \r
Message: $input.json('$.message') \n
")`,
  "Message.Subject.Data=Personal+Portfolio+Contact+Form+Submission",
  `Destination.ToAddresses.member.1=${TO_ADDRESS}`,
  `Source=${FROM_ADDRESS}`,
].join("&");
