import{S3}from"aws-sdk"

const s3 = new S3()
const {BUCKET_NAME:Bucket} = process.env
const msg =o=>{
  return `[Illiase] [AWS.S3] ${o}\n    `
}

export async function s3Upload(Key,Body,ContentType){
  try {
    const param = {Bucket,Key,Body,ContentType}
    const res = await s3.upload(param).promise()
    console.log(msg('Create object success:'), res.Location)
  } catch (e) {
    console.error(msg(`Error uploading object "${Key}":`), e)
  }
}

export async function s3Delete(Key){
  try {
    const param = {Bucket,Key}
    const res = await s3.deleteObject(param).promise()
    console.log(msg('Deleted object success:'),res)
  } catch (e) {
    console.error(msg(`Error deleting object "${Key}"`), e)
  }
}

export async function s3Get(Key){
  try {
    const param = {Bucket,Key}
    await s3.getObject(param).promise()
  } catch (e) {
    console.error(msg(`Error getting object "${Key}"`), e)
  }
}