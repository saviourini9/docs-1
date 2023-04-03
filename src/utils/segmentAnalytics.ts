/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 *
 * You can install it with: `npm install --save-dev ajv`.
 */
import Ajv from "ajv";
/**
 * The default handler that is fired if none is supplied with setTypewriterOptions.
 * This handler will log a warning message to the console.
 */
export const defaultValidationErrorHandler = (message, violations) => {
  const msg = JSON.stringify(
    {
      type: "Typewriter JSON Schema Validation Error",
      description:
        `You made an analytics call (${message.event}) using Typewriter that doesn't match the ` +
        "Tracking Plan spec.",
      errors: violations,
    },
    undefined,
    2
  );
  console.warn(msg);
};
let onViolation = defaultValidationErrorHandler;
let analytics = () => {
  return window.analytics;
};
/**
 * Updates the run-time configuration of this Typewriter client.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
 * 		calls are forwarded on to. Defaults to window.analytics.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
export function setTypewriterOptions(options) {
  analytics = options.analytics
    ? () => options.analytics || window.analytics
    : analytics;
  onViolation = options.onViolation || onViolation;
}
/**
 * Validates a message against a JSON Schema using Ajv. If the message
 * is invalid, the `onViolation` handler will be called.
 */
export function validateAgainstSchema(message, schema) {
  const ajv = new Ajv({ schemaId: "auto", allErrors: true, verbose: true });
  ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"));
  ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-04.json"));
  if (!ajv.validate(schema, message) && ajv.errors) {
    onViolation(message, ajv.errors);
  }
}
/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
export function withTypewriterContext(message = {}) {
  return {
    ...message,
    context: {
      ...(message.context || {}),
      typewriter: {
        language: "javascript",
        version: "7.0.1",
      },
    },
  };
}

/**
 * User submits comments after their thumbs/down rating
 *
 * @param {FeedbackCommentProvided} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function feedbackCommentProvided(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    description: "User submits comments after their thumbs/down rating",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          comment: {
            description: "the comment",
            type: "string",
          },
          helpful: {
            description: "the rating given prior to the comment",
            type: "boolean",
          },
          section: {
            description:
              "Was the feedback form in the right-nav or footer clicked?",
            type: "string",
          },
          title: {
            description: "",
            type: "string",
          },
        },
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    title: "Feedback Comment Provided",
    type: "object",
  };
  const message = {
    event: "Feedback Comment Provided",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Feedback Comment Provided",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * User submits a thumbs up/down rating for a docs article
 *
 * @param {FeedbackProvided} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function feedbackProvided(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    description: "User submits a thumbs up/down rating for a docs article",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          comment: {
            description: "",
            type: "string",
          },
          helpful: {
            description:
              "Boolean representing the value of the feedback, true is helpful, false is not helpful",
            type: "boolean",
          },
          section: {
            description:
              "Was the feedback form in the right-nav or footer clicked?",
            pattern: "right-nav|footer",
            type: "string",
          },
          title: {
            description: "",
            type: "string",
          },
        },
        required: ["helpful", "section", "title"],
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    required: ["properties"],
    title: "Feedback Provided",
    type: "object",
  };
  const message = {
    event: "Feedback Provided",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Feedback Provided",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * Fires a 'Home Button Clicked' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function homeButtonClicked(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    labels: {},
    properties: {
      context: {},
      properties: {
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    title: "Home Button Clicked",
    type: "object",
  };
  const message = {
    event: "Home Button Clicked",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Home Button Clicked",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * Fires a 'Lead Captured' track call.
 *
 * @param {LeadCaptured} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function leadCaptured(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          email: {
            description: "",
            type: "string",
          },
          location: {
            description: "",
            type: "string",
          },
          url: {
            description: "",
            type: "string",
          },
        },
        required: ["email", "location", "url"],
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    required: ["properties"],
    title: "Lead Captured",
    type: "object",
  };
  const message = {
    event: "Lead Captured",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Lead Captured",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * User clicks one of the navigation elements like the home button, ToC, or searches
 *
 * @param {NavigationControlUsed} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function navigationControlUsed(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    description:
      "User clicks one of the navigation elements like the home button, ToC, or searches",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          control_value: {
            description: "Name of control used",
            type: "string",
          },
          search_value: {
            description: "Value of search term if search bar is used",
            type: "string",
          },
        },
        required: ["control_value"],
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    required: ["properties"],
    title: "Navigation Control Used",
    type: "object",
  };
  const message = {
    event: "Navigation Control Used",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Navigation Control Used",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * Fires a 'Page Viewed' track call.
 *
 * @param {PageViewed} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function pageViewed(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          browser_language: {
            description: "Custom property to identify user's browser language",
            type: "string",
          },
          frontmatter: {
            description:
              "Custom property to add additional frontmatter context to each page call",
            type: "string",
          },
          ip: {
            description: "",
            type: "string",
          },
          name: {
            description: "",
            type: "string",
          },
          path: {
            description: "",
            type: "string",
          },
          referrer: {
            description: "",
            type: "string",
          },
          search: {
            description: "",
            type: "string",
          },
          timestamp: {
            description: "",
            type: "string",
          },
          timezone: {
            description: "",
            type: "string",
          },
          title: {
            description: "",
            type: "string",
          },
          url: {
            description: "",
            type: "string",
          },
        },
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    title: "Page Viewed",
    type: "object",
  };
  const message = {
    event: "Page Viewed",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Page Viewed",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * Fires a 'Scroll to Top Clicked' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function scrollToTopClicked(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    labels: {},
    properties: {
      context: {},
      properties: {
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    title: "Scroll to Top Clicked",
    type: "object",
  };
  const message = {
    event: "Scroll to Top Clicked",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Scroll to Top Clicked",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * User scrolled to the bottom of the page
 *
 * @param {ScrolledToBottom} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function scrolledToBottom(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    description: "User scrolled to the bottom of the page",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          url: {
            description: "",
            type: "string",
          },
        },
        required: ["url"],
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    required: ["properties"],
    title: "Scrolled To Bottom",
    type: "object",
  };
  const message = {
    event: "Scrolled To Bottom",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "Scrolled To Bottom",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
/**
 * Table of Contents Clicked
 *
 * @param {TocClicked} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function tocClicked(props, options, callback) {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    description: "Table of Contents Clicked",
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          link: {
            description: "link clicked",
            type: "string",
          },
          name: {
            description: "name of the link clicked",
            type: "string",
          },
          url: {
            description: "The url of the page (hostname + path)",
            type: "string",
          },
        },
        required: ["link", "name", "url"],
        type: "object",
      },
      traits: {
        type: "object",
      },
    },
    required: ["properties"],
    title: "TOC Clicked",
    type: "object",
  };
  const message = {
    event: "TOC Clicked",
    properties: props || {},
    options,
  };
  validateAgainstSchema(message, schema);
  const a = analytics();
  if (a) {
    a.track(
      "TOC Clicked",
      props || {},
      withTypewriterContext(options),
      callback
    );
  }
}
const clientAPI = {
  /**
   * Updates the run-time configuration of this Typewriter client.
   *
   * @param {TypewriterOptions} options - the options to upsert
   *
   * @typedef {Object} TypewriterOptions
   * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
   * 		calls are forwarded on to. Defaults to window.analytics.
   * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
   * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
   * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
   * 		will be logged to stderr.
   */
  setTypewriterOptions,
  /**
   * User submits comments after their thumbs/down rating
   *
   * @param {FeedbackCommentProvided} [props] - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  feedbackCommentProvided,
  /**
   * User submits a thumbs up/down rating for a docs article
   *
   * @param {FeedbackProvided} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  feedbackProvided,
};

export default new Proxy(clientAPI, {
  get(target, method) {
    // eslint-disable-next-line no-prototype-builtins
    if (typeof method === "string" && target.hasOwnProperty(method)) {
      return target[method];
    }
    return () => {
      console.warn(`⚠️  You made an analytics call (${String(
        method
      )}) that can't be found. Either:
    a) Re-generate your typewriter client: \`npx typewriter\`
    b) Add it to your Tracking Plan: https://app.segment.com/segment_prod/protocols/tracking-plans/rs_1Ohr9MJskSjbjKIZJ8ixf5dIAJ1`);
      const a = analytics();
      if (a) {
        a.track(
          "Unknown Analytics Call Fired",
          {
            method,
          },
          withTypewriterContext()
        );
      }
    };
  },
});
