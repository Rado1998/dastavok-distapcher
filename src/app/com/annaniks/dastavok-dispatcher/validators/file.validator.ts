import { Validator, FormControl } from "@angular/forms";

export class FileValidator implements Validator {
    static validate(c: FormControl): { [key: string]: any } {
        return c.value == null || c.value.length == 0 ? { "required": true } : null;
    }

    validate(c: FormControl): { [key: string]: any } {
        return FileValidator.validate(c);
    }
}