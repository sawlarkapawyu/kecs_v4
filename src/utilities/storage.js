import { Guid } from 'js-guid'
export const UploadFileToStorage = async (supabaseClient, bucketName, file) => {
  try {
    let fileNameParts = file.name.split('.')
    let fileType = fileNameParts[fileNameParts.length - 1]
    const { data, error } = await supabaseClient.storage
      .from(bucketName)
      .upload(`${Guid.newGuid()}.${fileType}`, file)
    if (error) return { success: false, data: null }
    return { success: true, data: data.path }
  } catch (error) {
    throw error
  }
}

export const UpdateFileInStorage = async (
  supabaseClient,
  bucketName,
  file,
  currentFilename
) => {
  try {
    const { data, error } = await supabaseClient.storage
      .from(bucketName)
      .update(currentFilename, file, {
        cacheControl: '3600',
        upsert: true,
      })

    console.log({ data, error })
    if (error) return { success: false, data: null }
    return { success: true, data: data.path }
  } catch (error) {
    throw error
  }
}

export async function getImage(supabaseClient, bucketName, filename) {
  try {
    let { data, error } = await supabaseClient.storage
      .from(bucketName)
      .download(filename)

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

export async function deleteFile(supabaseClient, bucketName, filename) {
  try {
    let { error } = await supabaseClient.storage
      .from(bucketName)
      .remove([].push(filename))

    if (error) throw error
  } catch (error) {
    throw error
  }
}