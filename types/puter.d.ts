/**
 * TypeScript type definitions for Puter.js SDK interfaces.
 * 
 * Defines types for file system items, users, key-value storage,
 * chat messages, and AI responses used throughout the application.
 */

/**
 * Represents a file or directory in Puter.js file system.
 * Contains metadata like path, size, permissions, and timestamps.
 */
interface FSItem {
    id: string;
    uid: string;
    name: string;
    path: string;
    is_dir: boolean;
    parent_id: string;
    parent_uid: string;
    created: number;
    modified: number;
    accessed: number;
    size: number | null;
    writable: boolean;
}

/**
 * Represents an authenticated Puter.js user.
 */
interface PuterUser {
    uuid: string;
    username: string;
}

/**
 * Key-value pair item from Puter.js KV store.
 */
interface KVItem {
    key: string;
    value: string;
}

/**
 * Content item within a chat message (file reference or text).
 */
interface ChatMessageContent {
    type: "file" | "text";
    puter_path?: string;
    text?: string;
}

/**
 * Chat message structure for AI conversations.
 * Supports both simple string content and structured content arrays.
 */
interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string | ChatMessageContent[];
}

/**
 * Configuration options for Puter.js AI chat requests.
 * Includes model selection, streaming, token limits, and temperature.
 */
interface PuterChatOptions {
    model?: string;
    stream?: boolean;
    max_tokens?: number;
    temperature?: number;
    tools?: {
        type: "function";
        function: {
            name: string;
            description: string;
            parameters: { type: string; properties: {} };
        }[];
    };
}

/**
 * Response structure from Puter.js AI chat service.
 * Contains the AI's message, usage statistics, and metadata.
 */
interface AIResponse {
    index: number;
    message: {
        role: string;
        content: string | any[];
        refusal: null | string;
        annotations: any[];
    };
    logprobs: null | any;
    finish_reason: string;
    usage: {
        type: string;
        model: string;
        amount: number;
        cost: number;
    }[];
    via_ai_chat_service: boolean;
}