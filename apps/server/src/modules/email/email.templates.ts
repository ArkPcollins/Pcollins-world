export const welcomeEmail =
(name:string)=>`

<h1>Welcome ${name}</h1>

<p>
Thanks for joining P Collins.
</p>

`;

export const verificationEmail =
(link:string)=>`

<h2>Email Verification</h2>

<a href="${link}">
Verify Account
</a>

`;

export const passwordResetEmail =
(link:string)=>`

<h2>Password Reset</h2>

<a href="${link}">
Reset Password
</a>

`;