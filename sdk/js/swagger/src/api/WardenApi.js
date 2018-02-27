/*
 * Copyright © 2015-2018 Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author		Aeneas Rekkas <aeneas+oss@aeneas.io>
 * @Copyright 	2017-2018 Aeneas Rekkas <aeneas+oss@aeneas.io>
 * @license 	Apache-2.0
 */

/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### Important REST API Documentation Notes  The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)   The API documentation always refers to the latest tagged version of ORY Hydra. For previous API documentations, please refer to https://github.com/ory/hydra/blob/<tag-id>/docs/api.swagger.yaml - for example:  0.9.13: https://github.com/ory/hydra/blob/v0.9.13/docs/api.swagger.yaml 0.8.1: https://github.com/ory/hydra/blob/v0.8.1/docs/api.swagger.yaml
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'ApiClient',
        'model/Group',
        'model/GroupMembers',
        'model/InlineResponse401',
        'model/WardenAccessRequest',
        'model/WardenAccessRequestResponse',
        'model/WardenTokenAccessRequest',
        'model/WardenTokenAccessRequestResponse'
      ],
      factory
    )
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/Group'),
      require('../model/GroupMembers'),
      require('../model/InlineResponse401'),
      require('../model/WardenAccessRequest'),
      require('../model/WardenAccessRequestResponse'),
      require('../model/WardenTokenAccessRequest'),
      require('../model/WardenTokenAccessRequestResponse')
    )
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer) {
      root.HydraOAuth2OpenIdConnectServer = {}
    }
    root.HydraOAuth2OpenIdConnectServer.WardenApi = factory(
      root.HydraOAuth2OpenIdConnectServer.ApiClient,
      root.HydraOAuth2OpenIdConnectServer.Group,
      root.HydraOAuth2OpenIdConnectServer.GroupMembers,
      root.HydraOAuth2OpenIdConnectServer.InlineResponse401,
      root.HydraOAuth2OpenIdConnectServer.WardenAccessRequest,
      root.HydraOAuth2OpenIdConnectServer.WardenAccessRequestResponse,
      root.HydraOAuth2OpenIdConnectServer.WardenTokenAccessRequest,
      root.HydraOAuth2OpenIdConnectServer.WardenTokenAccessRequestResponse
    )
  }
})(this, function(
  ApiClient,
  Group,
  GroupMembers,
  InlineResponse401,
  WardenAccessRequest,
  WardenAccessRequestResponse,
  WardenTokenAccessRequest,
  WardenTokenAccessRequestResponse
) {
  'use strict'

  /**
   * Warden service.
   * @module api/WardenApi
   * @version Latest
   */

  /**
   * Constructs a new WardenApi. 
   * @alias module:api/WardenApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the addMembersToGroup operation.
     * @callback module:api/WardenApi~addMembersToGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add members to a group
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups:&lt;id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;members.add\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the group to modify.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupMembers} opts.body 
     * @param {module:api/WardenApi~addMembersToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addMembersToGroup = function(id, opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error(
          "Missing the required parameter 'id' when calling addMembersToGroup"
        )
      }

      var pathParams = {
        id: id
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/warden/groups/{id}/members',
        'POST',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/WardenApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:model/Group} opts.body 
     * @param {module:api/WardenApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.createGroup = function(opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      var pathParams = {}
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = Group

      return this.apiClient.callApi(
        '/warden/groups',
        'POST',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/WardenApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group by id
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups:&lt;id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;delete\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the group to look up.
     * @param {module:api/WardenApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(id, callback) {
      var postBody = null

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error(
          "Missing the required parameter 'id' when calling deleteGroup"
        )
      }

      var pathParams = {
        id: id
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/warden/groups/{id}',
        'DELETE',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the doesWardenAllowAccessRequest operation.
     * @callback module:api/WardenApi~doesWardenAllowAccessRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WardenAccessRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if an access request is valid (without providing an access token)
     * Checks if a subject (typically a user or a service) is allowed to perform an action on a resource. This endpoint requires a subject, a resource name, an action name and a context. If the subject is not allowed to perform the action on the resource, this endpoint returns a 200 response with &#x60;{ \&quot;allowed\&quot;: false}&#x60;, otherwise &#x60;{ \&quot;allowed\&quot;: true }&#x60; is returned.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:allowed\&quot;], \&quot;actions\&quot;: [\&quot;decide\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:model/WardenAccessRequest} opts.body 
     * @param {module:api/WardenApi~doesWardenAllowAccessRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WardenAccessRequestResponse}
     */
    this.doesWardenAllowAccessRequest = function(opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      var pathParams = {}
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = WardenAccessRequestResponse

      return this.apiClient.callApi(
        '/warden/allowed',
        'POST',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the doesWardenAllowTokenAccessRequest operation.
     * @callback module:api/WardenApi~doesWardenAllowTokenAccessRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WardenTokenAccessRequestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if an access request is valid (providing an access token)
     * Checks if a token is valid and if the token subject is allowed to perform an action on a resource. This endpoint requires a token, a scope, a resource name, an action name and a context.   If a token is expired/invalid, has not been granted the requested scope or the subject is not allowed to perform the action on the resource, this endpoint returns a 200 response with &#x60;{ \&quot;allowed\&quot;: false}&#x60;.   Extra data set through the &#x60;accessTokenExtra&#x60; field in the consent flow will be included in the response.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:token:allowed\&quot;], \&quot;actions\&quot;: [\&quot;decide\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {module:model/WardenTokenAccessRequest} opts.body 
     * @param {module:api/WardenApi~doesWardenAllowTokenAccessRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WardenTokenAccessRequestResponse}
     */
    this.doesWardenAllowTokenAccessRequest = function(opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      var pathParams = {}
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = WardenTokenAccessRequestResponse

      return this.apiClient.callApi(
        '/warden/token/allowed',
        'POST',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/WardenApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a group by id
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups:&lt;id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the group to look up.
     * @param {module:api/WardenApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.getGroup = function(id, callback) {
      var postBody = null

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error(
          "Missing the required parameter 'id' when calling getGroup"
        )
      }

      var pathParams = {
        id: id
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = Group

      return this.apiClient.callApi(
        '/warden/groups/{id}',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the listGroups operation.
     * @callback module:api/WardenApi~listGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List groups
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups\&quot;], \&quot;actions\&quot;: [\&quot;list\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.member The id of the member to look up.
     * @param {Number} opts.limit The maximum amount of policies returned.
     * @param {Number} opts.offset The offset from where to start looking.
     * @param {module:api/WardenApi~listGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Group>}
     */
    this.listGroups = function(opts, callback) {
      opts = opts || {}
      var postBody = null

      var pathParams = {}
      var queryParams = {
        member: opts['member'],
        limit: opts['limit'],
        offset: opts['offset']
      }
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = [Group]

      return this.apiClient.callApi(
        '/warden/groups',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }

    /**
     * Callback function to receive the result of the removeMembersFromGroup operation.
     * @callback module:api/WardenApi~removeMembersFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove members from a group
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:warden:groups:&lt;id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;members.remove\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the group to modify.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupMembers} opts.body 
     * @param {module:api/WardenApi~removeMembersFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeMembersFromGroup = function(id, opts, callback) {
      opts = opts || {}
      var postBody = opts['body']

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error(
          "Missing the required parameter 'id' when calling removeMembersFromGroup"
        )
      }

      var pathParams = {
        id: id
      }
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = ['oauth2']
      var contentTypes = ['application/json']
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/warden/groups/{id}/members',
        'DELETE',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }
  }

  return exports
})
