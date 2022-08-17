(function() {var implementors = {};
implementors["lu_packets"] = [{"text":"impl&lt;U&gt; From&lt;ConnectedPong&gt; for Message&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U&gt; From&lt;ConnectionRequestAccepted&gt; for Message&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U&gt; From&lt;ReplicaConstruction&gt; for Message&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U&gt; From&lt;ReplicaSerialization&gt; for Message&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;GeneralMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;ClientMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;LuMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;Handshake&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;DisconnectNotify&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;LoginResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;GeneralChatMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;PrivateChatMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;AchievementNotify&gt; for Message","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString32&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString33&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString41&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString42&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString50&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString128&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString256&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuWString400&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;L, '_&gt; From&lt;&amp;'_ LVec&lt;L, AsciiChar&gt;&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;L, '_&gt; From&lt;&amp;'_ LVec&lt;L, Ucs2Char&gt;&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;L, '_&gt; From&lt;&amp;'_ [Ucs2Char]&gt; for LuVarWString&lt;L&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;u8&gt; for AsciiChar","synthetic":false,"types":[]},{"text":"impl From&lt;u8&gt; for Ucs2Char","synthetic":false,"types":[]},{"text":"impl&lt;L, T&gt; From&lt;Vec&lt;T&gt;&gt; for LVec&lt;L, T&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;GeneralMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;ChatMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;ClientMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;LuMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;Handshake&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;DisconnectNotify&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;LoadStaticZone&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;CreateCharacter&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;CharacterListResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;CharacterCreateResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;CharacterDeleteResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;SubjectGameMessage&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;TransferToWorld&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;BlueprintSaveResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;BlueprintLoadItemResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;AddFriendRequest&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;AddFriendResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;GetFriendsListResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;FriendUpdateNotify&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;GetIgnoreListResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;TeamInvite&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;MinimumChatModeResponse&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;MinimumChatModeResponsePrivate&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;ChatModerationString&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;UpdateFreeTrialStatus&gt; for Message","synthetic":false,"types":[]},{"text":"impl From&lt;Teleport&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;DropClientLoot&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;Die&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PreloadAnimation&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayAnimation&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetName&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;AddSkill&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RemoveSkill&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetCurrency&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamPickupItem&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayFxEffect&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;StopFxEffect&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;Resurrect&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetStunned&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetStunImmunity&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;Knockback&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;EnableRebuild&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MoveItemInInventory&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;AddItemToInventoryClientSync&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;EquipInventory&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UnEquipInventory&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;OfferMission&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyMission&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RebuildNotifyState&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ToggleInteractionUpdates&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TerminateInteraction&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;EmotePlayed&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamSetOffWorldFlag&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetInventorySize&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ActivityStop&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;CancelMission&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ResetMissions&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyClientShootingGalleryScore&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetUserCtrlCompPause&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyClientFlagChange&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;Help&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;VendorTransactionResult&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;HasBeenCollectedByClient&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TransferToZone&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TransferToZoneCheckedIm&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;InvalidZoneTransferList&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TransferToLastNonInstance&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;DisplayMessageBox&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;Smash&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UnSmash&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetGravityScale&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlaceModelResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetJetPackMode&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RegisterPetId&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RegisterPetDbId&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ShowActivityCountdown&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;DisplayTooltip&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;StartActivityTime&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ActivityPause&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UseItemResult&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PetResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SendActivitySummaryLeaderboardData&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ClientNotifyPet&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyPetTamingMinigame&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PetTamingTryBuildResult&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;AddPetToPlayer&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetPetName&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PetNameChanged&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ShowPetActionButton&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetEmoteLockState&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UseItemRequirementsResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayEmbeddedEffectOnAllClientsNearObject&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyClientZoneObject&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UpdateReputation&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PropertyRentalResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlatformResync&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayCinematic&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;EndCinematic&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ScriptNetworkVarUpdate&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;BroadcastTextToChatbox&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ServerTradeInvite&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ServerTradeInitialReply&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ServerTradeFinalReply&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ServerTradeAccept&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;GetLastCustomBuild&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetIgnoreProjectileCollision&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;OrientToObject&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;OrientToPosition&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;OrientToAngle&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PropertyModerationStatusUpdate&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RequestClientBounce&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;BouncerActiveStatus&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MoveInventoryBatch&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ObjectActivatedClient&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyClientObject&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;DisplayZoneSummary&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ModifyPlayerZoneStatistic&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;StartArrangingWithItem&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;FinishArrangingWithItem&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetBuildModeConfirmed&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;BuildModeNotificationReport&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetModelToBuild&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SpawnModelBricks&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyClientFailedPrecondition&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleAssemblyDbDataForClient&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;EchoSyncSkill&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;DoClientProjectileImpact&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetPlayerAllowedRespawn&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UiMessageServerToSingleClient&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UncastSkill&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;FireEventClientSide&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ChangeObjectWorldState&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;VehicleLockInput&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;VehicleUnlockInput&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RacingResetPlayerToLastReset&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RacingSetPlayerResetInfo&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;LockNodeRotation&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyVehicleOfRacingObject&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayerReachedRespawnCheckpoint&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;HandleUgcEquipPostDeleteBasedOnEditMode&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;HandleUgcEquipPreCreateBasedOnEditMode&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MatchResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MatchUpdate&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ChangeIdleFlags&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyRacingClient&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;RacingPlayerLoaded&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetStatusImmunity&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetPetNameModerated&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ModifyLegoScore&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetRailMovement&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;StartRailMovement&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyRailActivatorStateChange&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyRewardMailed&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UpdatePlayerStatistic&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyNotEnoughInvSpace&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyPropertyOfEditMode&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamSetLeader&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamGetStatusResponse&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamAddPlayer&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;TeamRemovePlayer&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetResurrectRestoreValues&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetPropertyModerationStatus&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;UpdatePropertyModelCount&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;VehicleStopBoost&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;StartCelebrationEffect&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetLocalTeam&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;ResponseMoveItemBetweenInventoryTypes&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;PlayerSetCameraCyclingMode&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;SetMountInventoryId&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;NotifyLevelRewards&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;MarkInventoryItemAsActive&gt; for GameMessage","synthetic":false,"types":[]},{"text":"impl From&lt;bool&gt; for Amf3","synthetic":false,"types":[]},{"text":"impl From&lt;f32&gt; for Amf3","synthetic":false,"types":[]},{"text":"impl From&lt;f64&gt; for Amf3","synthetic":false,"types":[]},{"text":"impl From&lt;LVec&lt;u32, Ucs2Char&gt;&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ str&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;i32&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;f32&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;f64&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;bool&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;i64&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ [u8]&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl&lt;const N:&nbsp;usize, '_&gt; From&lt;&amp;'_ [u8; N]&gt; for LnvValue","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LVec&lt;u32, Ucs2Char&gt;&gt; for LuNameValue","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ LuNameValue&gt; for LuVarWString&lt;u32&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()