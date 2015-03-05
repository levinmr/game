goog.require('app.characterTemplate.CharacterTemplateModel');
goog.require('app.characterTemplate.CharacterTemplateService');

describe('app.characterTemplate.CharacterTemplateService', function() {
  var $q,
      $rootScope,
      characterTemplateApiService,
      pubSubService,
      template,
      callback,
      payloads = {},
      promises = {},
      uut;

  beforeEach(inject(function($injector) {
    $q = $injector.get('$q');
    $rootScope = $injector.get('$rootScope');

    characterTemplateApiService = jasmine.createSpyObj(
        'characterTemplateApiService', ['get']);
    pubSubService = jasmine.createSpyObj('pubSubService', ['subscribe']);

    pubSubService.subscribe.andCallFake(function(channel, topic, func) {
      callback = func;
    });

    template = new app.characterTemplate.CharacterTemplateModel();

    promises.get = $q.defer();
    payloads.get = { data: [template] };

    characterTemplateApiService.get.andReturn(promises.get.promise);

    uut = new app.characterTemplate.CharacterTemplateService(
        characterTemplateApiService, pubSubService);
  }));

  describe('buildCharacterTemplates', function() {

    it('calls characterTemplateApiService.get()', function() {
      callback();

      promises.get.resolve(payloads.get);

      $rootScope.$digest();

      expect(characterTemplateApiService.get).toHaveBeenCalled();
    });
  });
});
