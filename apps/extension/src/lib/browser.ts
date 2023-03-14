import { POPUP_REQUIRED_PERMISSIONS } from "./constants";
import { GeneralError, InsufficientPopupPermissionsError } from "./errors";

/**
 * Requests access to the specified permissions
 * https://developer.chrome.com/docs/extensions/reference/permissions/#method-request
 * @param permissionNames
 * @returns
 */
export const requestPermissions = async (
  permissionNames: string[]
): Promise<boolean> => {
  return chrome.permissions.request({
    permissions: permissionNames,
  });
};

/**
 * Runs a query to detect specific permissions
 * https://developer.chrome.com/docs/extensions/reference/permissions/#method-contains
 * @param permissionNames
 * @returns
 */
export const containsPermissions = (
  permissionNames: string[]
): Promise<boolean> => {
  return chrome.permissions.contains({
    permissions: permissionNames,
  });
};

/**
 * Gets the url of the windows active tab
 * https://developer.chrome.com/docs/extensions/reference/tabs/#method-query
 * @returns
 */
export const getCurrentUrl = async (): Promise<string> => {
  try {
    const hasPermission = await containsPermissions(POPUP_REQUIRED_PERMISSIONS);
    if (!hasPermission) {
      const granted = await requestPermissions(POPUP_REQUIRED_PERMISSIONS);
      if (!granted) {
        throw new InsufficientPopupPermissionsError();
      }
    }

    const tabs = await chrome.tabs.query({
      currentWindow: true,
    });
    if (!tabs.length) {
      console.error("No tabs found.");
      throw new GeneralError();
    }

    const activeTab = tabs.find((_tab) => _tab.active);
    if (!activeTab) {
      console.error("No active tab found.");
      throw new GeneralError();
    }

    const url = activeTab.url;
    if (!url) {
      console.error("No url found on the current tab", tabs[0]);
      throw new GeneralError();
    }

    return url;
  } catch (error) {
    console.error("Something unexpected happened", error);
    throw new GeneralError();
  }
};

/**
 * Opens the extensions options page
 * https://developer.chrome.com/docs/extensions/reference/runtime/#method-openOptionsPage
 * @returns
 */
export const openSettings = (): void => chrome.runtime.openOptionsPage();

/**
 * Gets one or more items from storage
 * https://developer.chrome.com/docs/extensions/reference/storage/#type-StorageArea
 * @param keys
 * @returns
 */
export const getStorage = (keys: string | string[]) =>
  chrome.storage.sync.get(keys);

/**
 * Sets items in storage
 * https://developer.chrome.com/docs/extensions/reference/storage/#type-StorageArea
 * @param items
 */
export const setStorage = (items: { [key: string]: string }) =>
  chrome.storage.sync.set(items);
