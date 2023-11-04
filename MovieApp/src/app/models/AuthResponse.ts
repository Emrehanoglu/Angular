export interface AuthResponse{ /* http sonucunda bana döncek olan bilgilerin şablonu */
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registeder?: string/* signUp 'da olmayacak fakat login 'de olacak */
}