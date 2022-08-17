(function() {var implementors = {};
implementors["lu_packets"] = [{"text":"impl Send for SystemAddress","synthetic":true,"types":[]},{"text":"impl Send for ConnectedPong","synthetic":true,"types":[]},{"text":"impl Send for ConnectionRequestAccepted","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !Send for Message&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl Send for ParentInfo","synthetic":true,"types":[]},{"text":"impl Send for ChildInfo","synthetic":true,"types":[]},{"text":"impl Send for ParentChildInfo","synthetic":true,"types":[]},{"text":"impl !Send for ReplicaConstruction","synthetic":true,"types":[]},{"text":"impl !Send for ReplicaSerialization","synthetic":true,"types":[]},{"text":"impl Send for AchievementVendorConstruction","synthetic":true,"types":[]},{"text":"impl Send for AchievementVendorProtocol","synthetic":true,"types":[]},{"text":"impl Send for CombatAiInfo","synthetic":true,"types":[]},{"text":"impl Send for BaseCombatAiConstruction","synthetic":true,"types":[]},{"text":"impl Send for BaseCombatAiProtocol","synthetic":true,"types":[]},{"text":"impl Send for AiCombatState","synthetic":true,"types":[]},{"text":"impl Send for BbbConstruction","synthetic":true,"types":[]},{"text":"impl Send for BbbProtocol","synthetic":true,"types":[]},{"text":"impl Send for BouncerConstruction","synthetic":true,"types":[]},{"text":"impl Send for BouncerProtocol","synthetic":true,"types":[]},{"text":"impl Send for BuffInfo","synthetic":true,"types":[]},{"text":"impl Send for BuffConstruction","synthetic":true,"types":[]},{"text":"impl Send for BuffSerialization","synthetic":true,"types":[]},{"text":"impl Send for BuffProtocol","synthetic":true,"types":[]},{"text":"impl Send for GmPvpInfo","synthetic":true,"types":[]},{"text":"impl Send for SocialInfo","synthetic":true,"types":[]},{"text":"impl Send for CharacterConstruction","synthetic":true,"types":[]},{"text":"impl Send for CharacterSerialization","synthetic":true,"types":[]},{"text":"impl Send for CharacterProtocol","synthetic":true,"types":[]},{"text":"impl Send for TransitionState","synthetic":true,"types":[]},{"text":"impl Send for GameActivity","synthetic":true,"types":[]},{"text":"impl Send for CollectibleConstruction","synthetic":true,"types":[]},{"text":"impl Send for CollectibleProtocol","synthetic":true,"types":[]},{"text":"impl Send for JetpackInfo","synthetic":true,"types":[]},{"text":"impl Send for StunImmunityInfo","synthetic":true,"types":[]},{"text":"impl Send for CheatInfo","synthetic":true,"types":[]},{"text":"impl Send for EquippedItemInfo","synthetic":true,"types":[]},{"text":"impl Send for Bubble","synthetic":true,"types":[]},{"text":"impl Send for BubbleInfo","synthetic":true,"types":[]},{"text":"impl Send for FrameStats","synthetic":true,"types":[]},{"text":"impl Send for LocalSpaceInfo","synthetic":true,"types":[]},{"text":"impl Send for ControllablePhysicsConstruction","synthetic":true,"types":[]},{"text":"impl Send for FrameStatsTeleportInfo","synthetic":true,"types":[]},{"text":"impl Send for ControllablePhysicsSerialization","synthetic":true,"types":[]},{"text":"impl Send for ControllablePhysicsProtocol","synthetic":true,"types":[]},{"text":"impl Send for DonationVendorInfo","synthetic":true,"types":[]},{"text":"impl Send for DonationVendorConstruction","synthetic":true,"types":[]},{"text":"impl Send for DonationVendorProtocol","synthetic":true,"types":[]},{"text":"impl Send for StatusImmunityInfo","synthetic":true,"types":[]},{"text":"impl Send for SmashableInfo","synthetic":true,"types":[]},{"text":"impl Send for StatsInfo","synthetic":true,"types":[]},{"text":"impl Send for DestroyableConstruction","synthetic":true,"types":[]},{"text":"impl Send for SerializationStatsInfo","synthetic":true,"types":[]},{"text":"impl Send for DestroyableSerialization","synthetic":true,"types":[]},{"text":"impl Send for DestroyableProtocol","synthetic":true,"types":[]},{"text":"impl Send for EffectInfo","synthetic":true,"types":[]},{"text":"impl Send for FxConstruction","synthetic":true,"types":[]},{"text":"impl Send for FxSerialization","synthetic":true,"types":[]},{"text":"impl Send for FxProtocol","synthetic":true,"types":[]},{"text":"impl Send for EquippedItemInfo","synthetic":true,"types":[]},{"text":"impl Send for EquippedModelTransform","synthetic":true,"types":[]},{"text":"impl Send for InventoryConstruction","synthetic":true,"types":[]},{"text":"impl Send for InventoryProtocol","synthetic":true,"types":[]},{"text":"impl Send for ItemInfo","synthetic":true,"types":[]},{"text":"impl Send for ItemConstruction","synthetic":true,"types":[]},{"text":"impl Send for ItemProtocol","synthetic":true,"types":[]},{"text":"impl Send for UgcModerationStatus","synthetic":true,"types":[]},{"text":"impl Send for LevelProgressionConstruction","synthetic":true,"types":[]},{"text":"impl Send for LevelProgressionProtocol","synthetic":true,"types":[]},{"text":"impl Send for LupExhibitConstruction","synthetic":true,"types":[]},{"text":"impl Send for LupExhibitProtocol","synthetic":true,"types":[]},{"text":"impl Send for ModelBehaviorInfo","synthetic":true,"types":[]},{"text":"impl Send for ModelEditingInfo","synthetic":true,"types":[]},{"text":"impl Send for MutableModelBehaviorConstructionInfo","synthetic":true,"types":[]},{"text":"impl Send for MutableModelBehaviorConstruction","synthetic":true,"types":[]},{"text":"impl Send for MutableModelBehaviorSerializationInfo","synthetic":true,"types":[]},{"text":"impl Send for MutableModelBehaviorSerialization","synthetic":true,"types":[]},{"text":"impl Send for MutableModelBehaviorProtocol","synthetic":true,"types":[]},{"text":"impl Send for PhysicsBehaviorType","synthetic":true,"types":[]},{"text":"impl Send for ModuleAssemblyInfo","synthetic":true,"types":[]},{"text":"impl Send for ModuleAssemblyConstruction","synthetic":true,"types":[]},{"text":"impl Send for ModuleAssemblyProtocol","synthetic":true,"types":[]},{"text":"impl Send for PlatformMoverInfo","synthetic":true,"types":[]},{"text":"impl Send for PlatformSimpleMoverExtraInfo","synthetic":true,"types":[]},{"text":"impl Send for PlatformSimpleMoverInfo","synthetic":true,"types":[]},{"text":"impl Send for PlatformPathInfo","synthetic":true,"types":[]},{"text":"impl Send for MovingPlatformConstruction","synthetic":true,"types":[]},{"text":"impl Send for MovingPlatformProtocol","synthetic":true,"types":[]},{"text":"impl Send for PlatformSubcomponentInfo","synthetic":true,"types":[]},{"text":"impl Send for DistanceInfo","synthetic":true,"types":[]},{"text":"impl Send for PhysicsEffectInfo","synthetic":true,"types":[]},{"text":"impl Send for ActivePhysicsEffectInfo","synthetic":true,"types":[]},{"text":"impl Send for PhantomPhysicsConstruction","synthetic":true,"types":[]},{"text":"impl Send for PhantomPhysicsProtocol","synthetic":true,"types":[]},{"text":"impl Send for PhysicsEffectType","synthetic":true,"types":[]},{"text":"impl Send for ForcedMovementInfo","synthetic":true,"types":[]},{"text":"impl Send for PlayerForcedMovementConstruction","synthetic":true,"types":[]},{"text":"impl Send for PlayerForcedMovementProtocol","synthetic":true,"types":[]},{"text":"impl Send for TamedPetInfo","synthetic":true,"types":[]},{"text":"impl Send for PetConstructionInfo","synthetic":true,"types":[]},{"text":"impl Send for PetConstruction","synthetic":true,"types":[]},{"text":"impl Send for PetSerializationInfo","synthetic":true,"types":[]},{"text":"impl Send for PetSerialization","synthetic":true,"types":[]},{"text":"impl Send for PetProtocol","synthetic":true,"types":[]},{"text":"impl Send for PossessionType","synthetic":true,"types":[]},{"text":"impl Send for PossessableInfo","synthetic":true,"types":[]},{"text":"impl Send for PossessableConstruction","synthetic":true,"types":[]},{"text":"impl Send for PossessableProtocol","synthetic":true,"types":[]},{"text":"impl Send for PossessionInfo","synthetic":true,"types":[]},{"text":"impl Send for PossessionControlConstruction","synthetic":true,"types":[]},{"text":"impl Send for PossessionControlProtocol","synthetic":true,"types":[]},{"text":"impl Send for PossessionType","synthetic":true,"types":[]},{"text":"impl Send for QuickbuildConstructionInfo","synthetic":true,"types":[]},{"text":"impl Send for QuickbuildConstruction","synthetic":true,"types":[]},{"text":"impl Send for QuickbuildSerializationInfo","synthetic":true,"types":[]},{"text":"impl Send for QuickbuildSerialization","synthetic":true,"types":[]},{"text":"impl Send for QuickbuildProtocol","synthetic":true,"types":[]},{"text":"impl Send for PreRacePlayerInfo","synthetic":true,"types":[]},{"text":"impl Send for PostRacePlayerInfo","synthetic":true,"types":[]},{"text":"impl Send for RaceInfo","synthetic":true,"types":[]},{"text":"impl Send for DuringRacePlayerInfo","synthetic":true,"types":[]},{"text":"impl Send for RacingControlConstruction","synthetic":true,"types":[]},{"text":"impl Send for RacingControlProtocol","synthetic":true,"types":[]},{"text":"impl Send for RigidBodyPhantomPhysicsConstruction","synthetic":true,"types":[]},{"text":"impl Send for RigidBodyPhantomPhysicsProtocol","synthetic":true,"types":[]},{"text":"impl Send for ScriptConstruction","synthetic":true,"types":[]},{"text":"impl Send for ScriptSerialization","synthetic":true,"types":[]},{"text":"impl Send for ScriptProtocol","synthetic":true,"types":[]},{"text":"impl Send for ActivityUserInfo","synthetic":true,"types":[]},{"text":"impl Send for ScriptedActivityConstruction","synthetic":true,"types":[]},{"text":"impl Send for ScriptedActivityProtocol","synthetic":true,"types":[]},{"text":"impl Send for ShootingGalleryInfo","synthetic":true,"types":[]},{"text":"impl Send for ShootingGalleryConstruction","synthetic":true,"types":[]},{"text":"impl Send for ShootingGallerySerialization","synthetic":true,"types":[]},{"text":"impl Send for ShootingGalleryProtocol","synthetic":true,"types":[]},{"text":"impl Send for VelocityInfo","synthetic":true,"types":[]},{"text":"impl Send for PositionRotationInfo","synthetic":true,"types":[]},{"text":"impl Send for SimplePhysicsConstruction","synthetic":true,"types":[]},{"text":"impl Send for SimplePhysicsSerialization","synthetic":true,"types":[]},{"text":"impl Send for SimplePhysicsProtocol","synthetic":true,"types":[]},{"text":"impl Send for ClimbingProperty","synthetic":true,"types":[]},{"text":"impl Send for MotionType","synthetic":true,"types":[]},{"text":"impl Send for BehaviorInfo","synthetic":true,"types":[]},{"text":"impl Send for SkillInfo","synthetic":true,"types":[]},{"text":"impl Send for SkillConstruction","synthetic":true,"types":[]},{"text":"impl Send for SkillSerialization","synthetic":true,"types":[]},{"text":"impl Send for SkillProtocol","synthetic":true,"types":[]},{"text":"impl Send for SwitchConstruction","synthetic":true,"types":[]},{"text":"impl Send for SwitchProtocol","synthetic":true,"types":[]},{"text":"impl Send for RemoteInputInfo","synthetic":true,"types":[]},{"text":"impl Send for VehicleFrameStats","synthetic":true,"types":[]},{"text":"impl Send for VehiclePhysicsConstruction","synthetic":true,"types":[]},{"text":"impl Send for VehicleFrameStatsTeleportInfo","synthetic":true,"types":[]},{"text":"impl Send for VehiclePhysicsSerialization","synthetic":true,"types":[]},{"text":"impl Send for VehiclePhysicsProtocol","synthetic":true,"types":[]},{"text":"impl Send for EndOfRaceBehaviorType","synthetic":true,"types":[]},{"text":"impl Send for VendorInfo","synthetic":true,"types":[]},{"text":"impl Send for VendorConstruction","synthetic":true,"types":[]},{"text":"impl Send for VendorProtocol","synthetic":true,"types":[]},{"text":"impl Send for InternalPing","synthetic":true,"types":[]},{"text":"impl Send for ConnectionRequest","synthetic":true,"types":[]},{"text":"impl Send for NewIncomingConnection","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; Send for Message&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LuMessage","synthetic":true,"types":[]},{"text":"impl Send for ClientMessage","synthetic":true,"types":[]},{"text":"impl Send for LoginResponse","synthetic":true,"types":[]},{"text":"impl Send for LoginRequest","synthetic":true,"types":[]},{"text":"impl Send for ComputerStats","synthetic":true,"types":[]},{"text":"impl Send for ProcessorInfo","synthetic":true,"types":[]},{"text":"impl Send for OsInfo","synthetic":true,"types":[]},{"text":"impl Send for LuMessage","synthetic":true,"types":[]},{"text":"impl Send for AuthMessage","synthetic":true,"types":[]},{"text":"impl Send for ClientOs","synthetic":true,"types":[]},{"text":"impl Send for GeneralChatMessage","synthetic":true,"types":[]},{"text":"impl Send for PrivateChatMessage","synthetic":true,"types":[]},{"text":"impl Send for ChatChannel","synthetic":true,"types":[]},{"text":"impl Send for PrivateChatMessageResponseCode","synthetic":true,"types":[]},{"text":"impl Send for AchievementNotify","synthetic":true,"types":[]},{"text":"impl Send for ChatMessage","synthetic":true,"types":[]},{"text":"impl Send for AddFriendRequest","synthetic":true,"types":[]},{"text":"impl Send for AddFriendResponse","synthetic":true,"types":[]},{"text":"impl Send for AddIgnore","synthetic":true,"types":[]},{"text":"impl Send for TeamInvite","synthetic":true,"types":[]},{"text":"impl Send for TeamInviteResponse","synthetic":true,"types":[]},{"text":"impl Send for TeamLeave","synthetic":true,"types":[]},{"text":"impl Send for RequestMinimumChatMode","synthetic":true,"types":[]},{"text":"impl Send for RequestMinimumChatModePrivate","synthetic":true,"types":[]},{"text":"impl Send for ChatMessage","synthetic":true,"types":[]},{"text":"impl Send for AddFriendResponseCode","synthetic":true,"types":[]},{"text":"impl Send for TeamInviteResponseCode","synthetic":true,"types":[]},{"text":"impl Send for LuString33","synthetic":true,"types":[]},{"text":"impl Send for LuWString32","synthetic":true,"types":[]},{"text":"impl Send for LuWString33","synthetic":true,"types":[]},{"text":"impl Send for LuWString41","synthetic":true,"types":[]},{"text":"impl Send for LuWString42","synthetic":true,"types":[]},{"text":"impl Send for LuWString50","synthetic":true,"types":[]},{"text":"impl Send for LuWString128","synthetic":true,"types":[]},{"text":"impl Send for LuWString256","synthetic":true,"types":[]},{"text":"impl Send for LuWString400","synthetic":true,"types":[]},{"text":"impl Send for AsciiError","synthetic":true,"types":[]},{"text":"impl Send for Ucs2Error","synthetic":true,"types":[]},{"text":"impl Send for AsciiChar","synthetic":true,"types":[]},{"text":"impl Send for Ucs2Char","synthetic":true,"types":[]},{"text":"impl&lt;L, T&gt; Send for LVec&lt;L, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ServiceId","synthetic":true,"types":[]},{"text":"impl Send for Handshake","synthetic":true,"types":[]},{"text":"impl Send for GeneralMessage","synthetic":true,"types":[]},{"text":"impl Send for DisconnectNotify","synthetic":true,"types":[]},{"text":"impl Send for Handshake","synthetic":true,"types":[]},{"text":"impl Send for GeneralMessage","synthetic":true,"types":[]},{"text":"impl Send for LuNameValue","synthetic":true,"types":[]},{"text":"impl Send for ZoneId","synthetic":true,"types":[]},{"text":"impl Send for Vector3","synthetic":true,"types":[]},{"text":"impl Send for Quaternion","synthetic":true,"types":[]},{"text":"impl Send for LnvValue","synthetic":true,"types":[]},{"text":"impl Send for LoadStaticZone","synthetic":true,"types":[]},{"text":"impl Send for CreateCharacter","synthetic":true,"types":[]},{"text":"impl Send for CharacterListResponse","synthetic":true,"types":[]},{"text":"impl Send for CharListChar","synthetic":true,"types":[]},{"text":"impl Send for CharacterDeleteResponse","synthetic":true,"types":[]},{"text":"impl Send for TransferToWorld","synthetic":true,"types":[]},{"text":"impl Send for BlueprintSaveResponseModel","synthetic":true,"types":[]},{"text":"impl Send for BlueprintSaveResponse","synthetic":true,"types":[]},{"text":"impl Send for BlueprintLoadItemResponse","synthetic":true,"types":[]},{"text":"impl Send for AddFriendRequest","synthetic":true,"types":[]},{"text":"impl Send for AddFriendResponse","synthetic":true,"types":[]},{"text":"impl Send for FriendState","synthetic":true,"types":[]},{"text":"impl Send for FriendUpdateNotify","synthetic":true,"types":[]},{"text":"impl Send for IgnoreState","synthetic":true,"types":[]},{"text":"impl Send for TeamInvite","synthetic":true,"types":[]},{"text":"impl Send for MinimumChatModeResponse","synthetic":true,"types":[]},{"text":"impl Send for MinimumChatModeResponsePrivate","synthetic":true,"types":[]},{"text":"impl Send for ModerationSpan","synthetic":true,"types":[]},{"text":"impl Send for ChatModerationString","synthetic":true,"types":[]},{"text":"impl Send for UpdateFreeTrialStatus","synthetic":true,"types":[]},{"text":"impl Send for LuMessage","synthetic":true,"types":[]},{"text":"impl Send for ClientMessage","synthetic":true,"types":[]},{"text":"impl Send for InstanceType","synthetic":true,"types":[]},{"text":"impl Send for CharacterCreateResponse","synthetic":true,"types":[]},{"text":"impl Send for BlueprintSaveResponseType","synthetic":true,"types":[]},{"text":"impl Send for AddFriendResponseType","synthetic":true,"types":[]},{"text":"impl Send for GetFriendsListResponse","synthetic":true,"types":[]},{"text":"impl Send for FriendUpdateType","synthetic":true,"types":[]},{"text":"impl Send for GetIgnoreListResponse","synthetic":true,"types":[]},{"text":"impl Send for RemoveSkill","synthetic":true,"types":[]},{"text":"impl Send for EquipInventory","synthetic":true,"types":[]},{"text":"impl Send for SetIgnoreProjectileCollision","synthetic":true,"types":[]},{"text":"impl Send for UnEquipInventory","synthetic":true,"types":[]},{"text":"impl Send for MoveItemInInventory","synthetic":true,"types":[]},{"text":"impl Send for MoveInventoryBatch","synthetic":true,"types":[]},{"text":"impl Send for InventoryType","synthetic":true,"types":[]},{"text":"impl Send for KillType","synthetic":true,"types":[]},{"text":"impl Send for MissionState","synthetic":true,"types":[]},{"text":"impl Send for PetNotificationType","synthetic":true,"types":[]},{"text":"impl Send for SubjectGameMessage","synthetic":true,"types":[]},{"text":"impl Send for Teleport","synthetic":true,"types":[]},{"text":"impl Send for DropClientLoot","synthetic":true,"types":[]},{"text":"impl Send for Die","synthetic":true,"types":[]},{"text":"impl Send for PreloadAnimation","synthetic":true,"types":[]},{"text":"impl Send for PlayAnimation","synthetic":true,"types":[]},{"text":"impl Send for SetName","synthetic":true,"types":[]},{"text":"impl Send for AddSkill","synthetic":true,"types":[]},{"text":"impl Send for SetCurrency","synthetic":true,"types":[]},{"text":"impl Send for TeamPickupItem","synthetic":true,"types":[]},{"text":"impl Send for PlayFxEffect","synthetic":true,"types":[]},{"text":"impl Send for StopFxEffect","synthetic":true,"types":[]},{"text":"impl Send for Resurrect","synthetic":true,"types":[]},{"text":"impl Send for SetStunned","synthetic":true,"types":[]},{"text":"impl Send for SetStunImmunity","synthetic":true,"types":[]},{"text":"impl Send for Knockback","synthetic":true,"types":[]},{"text":"impl Send for EnableRebuild","synthetic":true,"types":[]},{"text":"impl Send for AddItemToInventoryClientSync","synthetic":true,"types":[]},{"text":"impl Send for OfferMission","synthetic":true,"types":[]},{"text":"impl Send for NotifyMission","synthetic":true,"types":[]},{"text":"impl Send for RebuildNotifyState","synthetic":true,"types":[]},{"text":"impl Send for ToggleInteractionUpdates","synthetic":true,"types":[]},{"text":"impl Send for TerminateInteraction","synthetic":true,"types":[]},{"text":"impl Send for EmotePlayed","synthetic":true,"types":[]},{"text":"impl Send for TeamSetOffWorldFlag","synthetic":true,"types":[]},{"text":"impl Send for SetInventorySize","synthetic":true,"types":[]},{"text":"impl Send for ActivityStop","synthetic":true,"types":[]},{"text":"impl Send for CancelMission","synthetic":true,"types":[]},{"text":"impl Send for ResetMissions","synthetic":true,"types":[]},{"text":"impl Send for NotifyClientShootingGalleryScore","synthetic":true,"types":[]},{"text":"impl Send for SetUserCtrlCompPause","synthetic":true,"types":[]},{"text":"impl Send for NotifyClientFlagChange","synthetic":true,"types":[]},{"text":"impl Send for Help","synthetic":true,"types":[]},{"text":"impl Send for VendorTransactionResult","synthetic":true,"types":[]},{"text":"impl Send for HasBeenCollectedByClient","synthetic":true,"types":[]},{"text":"impl Send for TransferToZone","synthetic":true,"types":[]},{"text":"impl Send for TransferToZoneCheckedIm","synthetic":true,"types":[]},{"text":"impl Send for InvalidZoneTransferList","synthetic":true,"types":[]},{"text":"impl Send for TransferToLastNonInstance","synthetic":true,"types":[]},{"text":"impl Send for DisplayMessageBox","synthetic":true,"types":[]},{"text":"impl Send for Smash","synthetic":true,"types":[]},{"text":"impl Send for UnSmash","synthetic":true,"types":[]},{"text":"impl Send for SetGravityScale","synthetic":true,"types":[]},{"text":"impl Send for PlaceModelResponse","synthetic":true,"types":[]},{"text":"impl Send for SetJetPackMode","synthetic":true,"types":[]},{"text":"impl Send for RegisterPetId","synthetic":true,"types":[]},{"text":"impl Send for RegisterPetDbId","synthetic":true,"types":[]},{"text":"impl Send for ShowActivityCountdown","synthetic":true,"types":[]},{"text":"impl Send for DisplayTooltip","synthetic":true,"types":[]},{"text":"impl Send for StartActivityTime","synthetic":true,"types":[]},{"text":"impl Send for ActivityPause","synthetic":true,"types":[]},{"text":"impl Send for UseItemResult","synthetic":true,"types":[]},{"text":"impl Send for PetResponse","synthetic":true,"types":[]},{"text":"impl Send for SendActivitySummaryLeaderboardData","synthetic":true,"types":[]},{"text":"impl Send for ClientNotifyPet","synthetic":true,"types":[]},{"text":"impl Send for NotifyPetTamingMinigame","synthetic":true,"types":[]},{"text":"impl Send for PetTamingTryBuildResult","synthetic":true,"types":[]},{"text":"impl Send for AddPetToPlayer","synthetic":true,"types":[]},{"text":"impl Send for SetPetName","synthetic":true,"types":[]},{"text":"impl Send for PetNameChanged","synthetic":true,"types":[]},{"text":"impl Send for ShowPetActionButton","synthetic":true,"types":[]},{"text":"impl Send for SetEmoteLockState","synthetic":true,"types":[]},{"text":"impl Send for UseItemRequirementsResponse","synthetic":true,"types":[]},{"text":"impl Send for PlayEmbeddedEffectOnAllClientsNearObject","synthetic":true,"types":[]},{"text":"impl Send for NotifyClientZoneObject","synthetic":true,"types":[]},{"text":"impl Send for UpdateReputation","synthetic":true,"types":[]},{"text":"impl Send for PropertyRentalResponse","synthetic":true,"types":[]},{"text":"impl Send for PlatformResync","synthetic":true,"types":[]},{"text":"impl Send for PlayCinematic","synthetic":true,"types":[]},{"text":"impl Send for EndCinematic","synthetic":true,"types":[]},{"text":"impl Send for ScriptNetworkVarUpdate","synthetic":true,"types":[]},{"text":"impl Send for BroadcastTextToChatbox","synthetic":true,"types":[]},{"text":"impl Send for ServerTradeInvite","synthetic":true,"types":[]},{"text":"impl Send for ServerTradeInitialReply","synthetic":true,"types":[]},{"text":"impl Send for ServerTradeFinalReply","synthetic":true,"types":[]},{"text":"impl Send for ServerTradeAccept","synthetic":true,"types":[]},{"text":"impl Send for GetLastCustomBuild","synthetic":true,"types":[]},{"text":"impl Send for OrientToObject","synthetic":true,"types":[]},{"text":"impl Send for OrientToPosition","synthetic":true,"types":[]},{"text":"impl Send for OrientToAngle","synthetic":true,"types":[]},{"text":"impl Send for PropertyModerationStatusUpdate","synthetic":true,"types":[]},{"text":"impl Send for RequestClientBounce","synthetic":true,"types":[]},{"text":"impl Send for BouncerActiveStatus","synthetic":true,"types":[]},{"text":"impl Send for ObjectActivatedClient","synthetic":true,"types":[]},{"text":"impl Send for NotifyClientObject","synthetic":true,"types":[]},{"text":"impl Send for DisplayZoneSummary","synthetic":true,"types":[]},{"text":"impl Send for ModifyPlayerZoneStatistic","synthetic":true,"types":[]},{"text":"impl Send for StartArrangingWithItem","synthetic":true,"types":[]},{"text":"impl Send for FinishArrangingWithItem","synthetic":true,"types":[]},{"text":"impl Send for SetBuildModeConfirmed","synthetic":true,"types":[]},{"text":"impl Send for BuildModeNotificationReport","synthetic":true,"types":[]},{"text":"impl Send for SetModelToBuild","synthetic":true,"types":[]},{"text":"impl Send for SpawnModelBricks","synthetic":true,"types":[]},{"text":"impl Send for NotifyClientFailedPrecondition","synthetic":true,"types":[]},{"text":"impl Send for ModuleAssemblyDbDataForClient","synthetic":true,"types":[]},{"text":"impl Send for EchoSyncSkill","synthetic":true,"types":[]},{"text":"impl Send for DoClientProjectileImpact","synthetic":true,"types":[]},{"text":"impl Send for SetPlayerAllowedRespawn","synthetic":true,"types":[]},{"text":"impl Send for UiMessageServerToSingleClient","synthetic":true,"types":[]},{"text":"impl Send for UncastSkill","synthetic":true,"types":[]},{"text":"impl Send for FireEventClientSide","synthetic":true,"types":[]},{"text":"impl Send for ChangeObjectWorldState","synthetic":true,"types":[]},{"text":"impl Send for VehicleLockInput","synthetic":true,"types":[]},{"text":"impl Send for VehicleUnlockInput","synthetic":true,"types":[]},{"text":"impl Send for RacingResetPlayerToLastReset","synthetic":true,"types":[]},{"text":"impl Send for RacingSetPlayerResetInfo","synthetic":true,"types":[]},{"text":"impl Send for LockNodeRotation","synthetic":true,"types":[]},{"text":"impl Send for NotifyVehicleOfRacingObject","synthetic":true,"types":[]},{"text":"impl Send for PlayerReachedRespawnCheckpoint","synthetic":true,"types":[]},{"text":"impl Send for HandleUgcEquipPostDeleteBasedOnEditMode","synthetic":true,"types":[]},{"text":"impl Send for HandleUgcEquipPreCreateBasedOnEditMode","synthetic":true,"types":[]},{"text":"impl Send for MatchResponse","synthetic":true,"types":[]},{"text":"impl Send for MatchUpdate","synthetic":true,"types":[]},{"text":"impl Send for ChangeIdleFlags","synthetic":true,"types":[]},{"text":"impl Send for NotifyRacingClient","synthetic":true,"types":[]},{"text":"impl Send for RacingPlayerLoaded","synthetic":true,"types":[]},{"text":"impl Send for SetStatusImmunity","synthetic":true,"types":[]},{"text":"impl Send for SetPetNameModerated","synthetic":true,"types":[]},{"text":"impl Send for ModifyLegoScore","synthetic":true,"types":[]},{"text":"impl Send for SetRailMovement","synthetic":true,"types":[]},{"text":"impl Send for StartRailMovement","synthetic":true,"types":[]},{"text":"impl Send for NotifyRailActivatorStateChange","synthetic":true,"types":[]},{"text":"impl Send for NotifyRewardMailed","synthetic":true,"types":[]},{"text":"impl Send for UpdatePlayerStatistic","synthetic":true,"types":[]},{"text":"impl Send for NotifyNotEnoughInvSpace","synthetic":true,"types":[]},{"text":"impl Send for NotifyPropertyOfEditMode","synthetic":true,"types":[]},{"text":"impl Send for TeamSetLeader","synthetic":true,"types":[]},{"text":"impl Send for TeamGetStatusResponse","synthetic":true,"types":[]},{"text":"impl Send for TeamAddPlayer","synthetic":true,"types":[]},{"text":"impl Send for TeamRemovePlayer","synthetic":true,"types":[]},{"text":"impl Send for SetResurrectRestoreValues","synthetic":true,"types":[]},{"text":"impl Send for SetPropertyModerationStatus","synthetic":true,"types":[]},{"text":"impl Send for UpdatePropertyModelCount","synthetic":true,"types":[]},{"text":"impl Send for VehicleStopBoost","synthetic":true,"types":[]},{"text":"impl Send for StartCelebrationEffect","synthetic":true,"types":[]},{"text":"impl Send for SetLocalTeam","synthetic":true,"types":[]},{"text":"impl Send for ResponseMoveItemBetweenInventoryTypes","synthetic":true,"types":[]},{"text":"impl Send for PlayerSetCameraCyclingMode","synthetic":true,"types":[]},{"text":"impl Send for SetMountInventoryId","synthetic":true,"types":[]},{"text":"impl Send for NotifyLevelRewards","synthetic":true,"types":[]},{"text":"impl Send for MarkInventoryItemAsActive","synthetic":true,"types":[]},{"text":"impl Send for GameMessage","synthetic":true,"types":[]},{"text":"impl Send for LootType","synthetic":true,"types":[]},{"text":"impl Send for StunState","synthetic":true,"types":[]},{"text":"impl Send for ImmunityState","synthetic":true,"types":[]},{"text":"impl Send for FailReason","synthetic":true,"types":[]},{"text":"impl Send for RebuildChallengeState","synthetic":true,"types":[]},{"text":"impl Send for TerminateType","synthetic":true,"types":[]},{"text":"impl Send for PetTamingNotifyType","synthetic":true,"types":[]},{"text":"impl Send for PetModerationStatus","synthetic":true,"types":[]},{"text":"impl Send for PetAbilityType","synthetic":true,"types":[]},{"text":"impl Send for UseItemResponse","synthetic":true,"types":[]},{"text":"impl Send for PropertyRentalResponseCode","synthetic":true,"types":[]},{"text":"impl Send for EndBehavior","synthetic":true,"types":[]},{"text":"impl Send for ResultType","synthetic":true,"types":[]},{"text":"impl Send for ObjectWorldState","synthetic":true,"types":[]},{"text":"impl Send for MatchResponseType","synthetic":true,"types":[]},{"text":"impl Send for MatchUpdateType","synthetic":true,"types":[]},{"text":"impl Send for RacingClientNotificationType","synthetic":true,"types":[]},{"text":"impl Send for ResponseMoveItemResponseCode","synthetic":true,"types":[]},{"text":"impl Send for CyclingMode","synthetic":true,"types":[]},{"text":"impl Send for UnequippableActiveType","synthetic":true,"types":[]},{"text":"impl Send for SubjectGameMessage","synthetic":true,"types":[]},{"text":"impl Send for RequestDie","synthetic":true,"types":[]},{"text":"impl Send for PlayEmote","synthetic":true,"types":[]},{"text":"impl Send for ControlBehaviors","synthetic":true,"types":[]},{"text":"impl Send for StartSkill","synthetic":true,"types":[]},{"text":"impl Send for CasterDead","synthetic":true,"types":[]},{"text":"impl Send for VerifyAck","synthetic":true,"types":[]},{"text":"impl Send for SelectSkill","synthetic":true,"types":[]},{"text":"impl Send for PickupCurrency","synthetic":true,"types":[]},{"text":"impl Send for PickupItem","synthetic":true,"types":[]},{"text":"impl Send for RebuildCancel","synthetic":true,"types":[]},{"text":"impl Send for RespondToMission","synthetic":true,"types":[]},{"text":"impl Send for ServerTerminateInteraction","synthetic":true,"types":[]},{"text":"impl Send for RequestUse","synthetic":true,"types":[]},{"text":"impl Send for BuyFromVendor","synthetic":true,"types":[]},{"text":"impl Send for SellToVendor","synthetic":true,"types":[]},{"text":"impl Send for AcknowledgePossession","synthetic":true,"types":[]},{"text":"impl Send for RequestActivityExit","synthetic":true,"types":[]},{"text":"impl Send for ShootingGalleryFire","synthetic":true,"types":[]},{"text":"impl Send for ClientItemConsumed","synthetic":true,"types":[]},{"text":"impl Send for UpdateShootingGalleryRotation","synthetic":true,"types":[]},{"text":"impl Send for SetTooltipFlag","synthetic":true,"types":[]},{"text":"impl Send for SetFlag","synthetic":true,"types":[]},{"text":"impl Send for HasBeenCollected","synthetic":true,"types":[]},{"text":"impl Send for DespawnPet","synthetic":true,"types":[]},{"text":"impl Send for PlayerLoaded","synthetic":true,"types":[]},{"text":"impl Send for RequestLinkedMission","synthetic":true,"types":[]},{"text":"impl Send for MissionDialogueOk","synthetic":true,"types":[]},{"text":"impl Send for MessageBoxRespond","synthetic":true,"types":[]},{"text":"impl Send for ChoiceBoxRespond","synthetic":true,"types":[]},{"text":"impl Send for UseNonEquipmentItem","synthetic":true,"types":[]},{"text":"impl Send for FetchModelMetadataRequest","synthetic":true,"types":[]},{"text":"impl Send for CommandPet","synthetic":true,"types":[]},{"text":"impl Send for RequestActivitySummaryLeaderboardData","synthetic":true,"types":[]},{"text":"impl Send for NotifyPet","synthetic":true,"types":[]},{"text":"impl Send for ClientExitTamingMinigame","synthetic":true,"types":[]},{"text":"impl Send for PetTamingMinigameResult","synthetic":true,"types":[]},{"text":"impl Send for NotifyTamingBuildSuccess","synthetic":true,"types":[]},{"text":"impl Send for RequestSetPetName","synthetic":true,"types":[]},{"text":"impl Send for CinematicUpdate","synthetic":true,"types":[]},{"text":"impl Send for FireEventServerSide","synthetic":true,"types":[]},{"text":"impl Send for PropertyEditorBegin","synthetic":true,"types":[]},{"text":"impl Send for ToggleGhostReferenceOverride","synthetic":true,"types":[]},{"text":"impl Send for SetGhostReferencePosition","synthetic":true,"types":[]},{"text":"impl Send for UpdateModelFromClient","synthetic":true,"types":[]},{"text":"impl Send for DeleteModelFromClient","synthetic":true,"types":[]},{"text":"impl Send for EnterProperty1","synthetic":true,"types":[]},{"text":"impl Send for PropertyEntranceSync","synthetic":true,"types":[]},{"text":"impl Send for ParseChatMessage","synthetic":true,"types":[]},{"text":"impl Send for SetMissionTypeState","synthetic":true,"types":[]},{"text":"impl Send for ClientTradeRequest","synthetic":true,"types":[]},{"text":"impl Send for ClientTradeAccept","synthetic":true,"types":[]},{"text":"impl Send for ReadyForUpdates","synthetic":true,"types":[]},{"text":"impl Send for SetLastCustomBuild","synthetic":true,"types":[]},{"text":"impl Send for PropertyModerationAction","synthetic":true,"types":[]},{"text":"impl Send for BounceNotification","synthetic":true,"types":[]},{"text":"impl Send for SetBbbAutosave","synthetic":true,"types":[]},{"text":"impl Send for BbbLoadItemRequest","synthetic":true,"types":[]},{"text":"impl Send for BbbSaveRequest","synthetic":true,"types":[]},{"text":"impl Send for ZoneSummaryDismissed","synthetic":true,"types":[]},{"text":"impl Send for ActivityStateChangeRequest","synthetic":true,"types":[]},{"text":"impl Send for StartBuildingWithItem","synthetic":true,"types":[]},{"text":"impl Send for DoneArrangingWithItem","synthetic":true,"types":[]},{"text":"impl Send for SetBuildMode","synthetic":true,"types":[]},{"text":"impl Send for BuildModeSet","synthetic":true,"types":[]},{"text":"impl Send for BuildExitConfirmation","synthetic":true,"types":[]},{"text":"impl Send for MoveItemBetweenInventoryTypes","synthetic":true,"types":[]},{"text":"impl Send for MissionDialogueCancelled","synthetic":true,"types":[]},{"text":"impl Send for SyncSkill","synthetic":true,"types":[]},{"text":"impl Send for RequestServerProjectileImpact","synthetic":true,"types":[]},{"text":"impl Send for ToggleSendingPositionUpdates","synthetic":true,"types":[]},{"text":"impl Send for PlacePropertyModel","synthetic":true,"types":[]},{"text":"impl Send for ReportBug","synthetic":true,"types":[]},{"text":"impl Send for RacingPlayerInfoResetFinished","synthetic":true,"types":[]},{"text":"impl Send for VehicleSetWheelLockState","synthetic":true,"types":[]},{"text":"impl Send for PropertyContentsFromClient","synthetic":true,"types":[]},{"text":"impl Send for ZonePropertyModelRotated","synthetic":true,"types":[]},{"text":"impl Send for ZonePropertyModelRemovedWhileEquipped","synthetic":true,"types":[]},{"text":"impl Send for ZonePropertyModelEquipped","synthetic":true,"types":[]},{"text":"impl Send for RacingClientReady","synthetic":true,"types":[]},{"text":"impl Send for ResetPropertyBehaviors","synthetic":true,"types":[]},{"text":"impl Send for SetConsumableItem","synthetic":true,"types":[]},{"text":"impl Send for UsedInformationPlaque","synthetic":true,"types":[]},{"text":"impl Send for ActivateBrickMode","synthetic":true,"types":[]},{"text":"impl Send for CancelRailMovement","synthetic":true,"types":[]},{"text":"impl Send for PlayerRailArrivedNotification","synthetic":true,"types":[]},{"text":"impl Send for ModifyGhostingDistance","synthetic":true,"types":[]},{"text":"impl Send for ModularAssemblyNifCompleted","synthetic":true,"types":[]},{"text":"impl Send for UpdatePropertyPerformanceCost","synthetic":true,"types":[]},{"text":"impl Send for SetEmotesEnabled","synthetic":true,"types":[]},{"text":"impl Send for VehicleNotifyHitImaginationServer","synthetic":true,"types":[]},{"text":"impl Send for RequestMoveItemBetweenInventoryTypes","synthetic":true,"types":[]},{"text":"impl Send for DismountComplete","synthetic":true,"types":[]},{"text":"impl Send for GameMessage","synthetic":true,"types":[]},{"text":"impl Send for TerminateType","synthetic":true,"types":[]},{"text":"impl Send for InteractionType","synthetic":true,"types":[]},{"text":"impl Send for QueryType","synthetic":true,"types":[]},{"text":"impl Send for CinematicEvent","synthetic":true,"types":[]},{"text":"impl Send for DeleteReason","synthetic":true,"types":[]},{"text":"impl Send for MissionLockState","synthetic":true,"types":[]},{"text":"impl Send for BuildType","synthetic":true,"types":[]},{"text":"impl Send for U29Error","synthetic":true,"types":[]},{"text":"impl Send for Amf3String","synthetic":true,"types":[]},{"text":"impl Send for Amf3Array","synthetic":true,"types":[]},{"text":"impl Send for Amf3","synthetic":true,"types":[]},{"text":"impl Send for ClientValidation","synthetic":true,"types":[]},{"text":"impl Send for CharacterCreateRequest","synthetic":true,"types":[]},{"text":"impl Send for CharacterLoginRequest","synthetic":true,"types":[]},{"text":"impl Send for CharacterDeleteRequest","synthetic":true,"types":[]},{"text":"impl Send for GeneralChatMessage","synthetic":true,"types":[]},{"text":"impl Send for LevelLoadComplete","synthetic":true,"types":[]},{"text":"impl Send for PositionUpdate","synthetic":true,"types":[]},{"text":"impl Send for StringCheck","synthetic":true,"types":[]},{"text":"impl Send for Top5IssuesRequest","synthetic":true,"types":[]},{"text":"impl Send for UgcDownloadFailed","synthetic":true,"types":[]},{"text":"impl Send for LuMessage","synthetic":true,"types":[]},{"text":"impl Send for WorldMessage","synthetic":true,"types":[]},{"text":"impl Send for RouteMessage","synthetic":true,"types":[]},{"text":"impl Send for Language","synthetic":true,"types":[]},{"text":"impl Send for UgcResType","synthetic":true,"types":[]},{"text":"impl Send for CreateRequest","synthetic":true,"types":[]},{"text":"impl Send for ContentCollectRequest","synthetic":true,"types":[]},{"text":"impl Send for DeleteRequest","synthetic":true,"types":[]},{"text":"impl Send for MarkAsReadRequest","synthetic":true,"types":[]},{"text":"impl Send for Mail","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()