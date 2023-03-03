import { REQUIRED_PERMISSIONS } from "./constants";

export class GeneralError extends Error {
  constructor() {
    super("Something went wrong. Try restarting this extension.");
  }
}

export class InsufficientPermissionsError extends Error {
  constructor() {
    super(
      `Insufficient permissions. In order for this extension to work, it needs to be able to read the url of this active tab. You can reopen this extension and follow the prompts your browser gives you or you can add the following permissions manually: ${REQUIRED_PERMISSIONS.join(
        ","
      )}`
    );
  }
}
