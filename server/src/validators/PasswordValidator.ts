import { PasswordValidationError } from '@errors/PasswordValidationError'

export const PasswordValidator = (password: string): boolean => {
  const patternStrongPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]*$'
  )

  if (!patternStrongPassword.test(password)) {
    throw new PasswordValidationError(
      'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
    )
  }

  if (password.length < 8) {
    throw new PasswordValidationError(
      'A sua senha deve conter no mínimo 8 caracteres.'
    )
  }

  return true
}
